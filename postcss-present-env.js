const postcss = require('postcss');
const postcssPresetEnv = require('postcss-preset-env');

postcss([
  postcssPresetEnv(/* pluginOptions */)
]).process('/assets/styles/app.scss' /*, processOptions */);