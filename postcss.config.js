/* eslint-disable */
const cssnano = require('cssnano')();
const postcssCombineMediaQuery = require('postcss-combine-media-query');

module.exports = {
  plugins: { 'postcss-combine-media-query': {}, cssnano: {} },
};
