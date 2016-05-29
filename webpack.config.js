var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: './www/static/src/App.jsx',
  output: {
    path: path.join(__dirname, '/www/static/js/'),
    filename: 'bundle.js'
  },
  plugins: [
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        cacheDirectory: false,
        query: {
          presets: ['react', 'es2015-loose', 'stage-0'],
          plugins: ['transform-runtime']
        },
        exclude: /node_modules/
      },
    ]
  }
}