// connect plugins to the file
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcss = require("postcss-import");


module.exports = {
  // connect plugins to PostCSS
  plugins: [
    postcss,
    // connect autoprefixer
    autoprefixer,
    // pass an object with options upon connecting cssnano:
    cssnano({ preset: "default" }) // set default minification settings
  ]
};
