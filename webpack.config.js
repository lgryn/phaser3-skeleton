const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './client/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'client/'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'client/index.html'),
        to: path.resolve(__dirname, 'build')
      }
    ])
  ]
};