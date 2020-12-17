"use strict";

var withSass = require("@zeit/next-sass");

module.exports = withCss(withSass({
  /* config options here */
  cssModules: true
}));