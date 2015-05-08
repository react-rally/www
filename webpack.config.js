var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /(\.eot|\.woff|\.ttf|\.svg)/, loader: 'file-loader' }
    ]
  },
  resolve: {
    modulesDirectories: [ 'app', 'node_modules' ]
  },
  plugins: [
    // new webpack.optimize.UglifhJsPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production')
    //   }
    // })
  ]
};
