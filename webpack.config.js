var path = require('path');


module.exports = {
  context: path.resolve('core/src/'),  //this is where I want you to start looking
  entry: './index.jsx',
  output: {
    path: path.resolve('public/assets/js'),
    publicPath: 'public/assets/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /(\.jsx$|\.js$)/,
      exclude: /(node_modules|server)/,
      loaders: ["babel-loader"]
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: 'public'
  },
  watch: true,
  devtool:"inline-source-map"
};
