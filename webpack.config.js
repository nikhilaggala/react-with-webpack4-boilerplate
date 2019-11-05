const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");

// Aliases for app kept in separate module
const alias = require('./alias');

module.exports = {
  entry: './src/js/index',

  resolve: {
    alias: alias,
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                context: path.resolve(__dirname, 'src', 'js'),
              },
            },
          },
        ],
      },
      {
        test: /\.(svg|png|jpg|jpeg)$/,
        use: ['url-loader']
      },
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "index.html"
    })
  ]
};
