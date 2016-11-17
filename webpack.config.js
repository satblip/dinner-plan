const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV !== 'production';

const plugins = [
  new CopyWebpackPlugin([
    { from: './src/recipes.json' },
    { from: './src/index.html' }
  ]),
  new CleanWebpackPlugin(['dist'], {
    exclude: ['.gitkeep']
  })
];

if (!isDev) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: true
  }));
}

module.exports = {
  name: 'dinner-plan',
  target: 'web',
  entry: './src/index.jsx',
  output: {
    path: '/dist',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'stage-0', 'react']
          }
        }]
      },
      {
        test: /\.(s)css$/,
        use: [
          'style-loader',
          'css-loader?modules&localIdentName=[local]-[hash:base64:5]!sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: 'svg-inline-loader'
      }
    ]
  },
  plugins
};
