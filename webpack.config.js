const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'index.js', 
    library: 'n_ajs_npmpackages', 
    libraryTarget: 'umd', 
    libraryExport: 'default', 
      globalObject: 'this', 
      //chunkLoading: false,
      //wasmLoading: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};