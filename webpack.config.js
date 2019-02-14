const webpack = require('webpack');
const path = require('path');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: "none",
  devtool: "inline-source-map",
  entry: "./src/index.ts",
  // entry: "./src/specs/frisby_status.spec.ts",
  output: {
    // chunkFilename: '[name].[chunkhash].js',
		// filename: '[name].[chunkhash].js'
    filename: "bundle.spec.js",
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        // include: [path.resolve(__dirname, 'src')],
        use: 'ts-loader',
        test: /\.tsx?$/,
        // loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
};
