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
    extensions: ['.js', '.jsx', '.css']
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
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules&localIdentName=[local]-[hash:base64:5]']
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
