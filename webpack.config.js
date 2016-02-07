path = require('path');

module.exports = {
  entry: "./js/app.js",
  output: {
    path: "./js/build/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {presets: 'es2015'}},
      { test: /\.html$/,
        exclude: /node_modules/,
        loader: "raw"}
    ]
  },
  devtool: 'source-map'
};
