"use strict";

var links = require("./links");

module.exports = ["/"].concat(links.map(function (link) {
  return link.route;
}));
