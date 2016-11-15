const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [{
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'stage-0', 'react']
          }
        }]
      },
      {
        test: /\.(s)css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&localIdentName=[local]-[hash:base64:5]!sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/recipes.json' },
      { from: './src/index.html' }
    ]),
    new CleanWebpackPlugin(['dist'], {
      exclude: ['.gitkeep']
    })
  ]
};
