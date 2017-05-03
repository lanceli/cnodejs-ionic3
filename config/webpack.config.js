const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common.js');
const ionicConfig = require('../node_modules/@ionic/app-scripts/config/webpack.config.js');

module.exports = webpackMerge(
  commonConfig,
  ionicConfig
);
