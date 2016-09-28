"use strict";

var path = require("path");
var fs = require("fs");
var md = require("markdown-it")();

var PATH = path.dirname(require.resolve("formidable-playbook/package.json"));
var README = path.join(PATH, "README.md");
var LINKS = "./links.json";

fs.readFile(README, "utf8", function (readErr, data) {
  if (readErr) { throw readErr; }

  var links = md.parse(data)
    // Convert to useful info for us for top-level links.
    .map(function (token) {
      // Look for children of size three (link open, text, link close).
      var children = token.children || [];
      if (children.length !== 3) { return {}; } // eslint-disable-line no-magic-numbers

      // Grab the route from href attr.
      var route = ((children[0].attrs || [])[0] || [])[1] || "";

      // Convert to final form for links.
      return {
        label: (children[1] || []).content,
        route: "/" + route.split(".md")[0]
      };
    })
    // Limit to top-level links that start with `docs/`
    .filter(function (obj) {
      return (obj.route || "").indexOf("/docs/") === 0;
    });

  fs.writeFile(LINKS, JSON.stringify(links, null, 2), function (writeErr) {
    if (writeErr) { throw writeErr; }
  });
});
