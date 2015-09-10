var webpack = require('webpack');
var plugins = [];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\/api\//, loader: 'json-loader' },
      { test: /(\.eot|\.woff|\.ttf|\.svg)/, loader: 'file-loader' }
    ]
  },
  resolve: {
    modulesDirectories: [ 'app', 'node_modules' ]
  },
  plugins: plugins
};
