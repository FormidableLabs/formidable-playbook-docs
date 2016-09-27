"use strict";
var path = require("path");
var fs = require("fs");
var PATH = "./node_modules/formidable-playbook";
var OUTPUT = "./links.json";
var README = path.join(PATH, "README.md");
var REGEX = /\[(.*)\]\((?!http)(?!#)(.*)\)/gm;

fs.readFile(README, "utf8", function (error, data) {
  if (error) {
    throw error;
  }

  var links = [];
  var result = REGEX.exec(data);
  while(result) {
    links.push({
      label: result[1],
      route: "/" + result[2].split(".md")[0],
    });

    result = REGEX.exec(data);
  }

  fs.writeFile(OUTPUT, JSON.stringify(links));
});
