var webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.EnvironmentPlugin(['IONIC_ENV'])
  ]
};

