let path = require('path');

module.exports = {
  entry: './javascript/app.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        "presets": ["env"]
      }
    }, ]
  }
}