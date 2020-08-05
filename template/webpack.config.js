const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DIST_DIR = path.resolve(__dirname, "public");
const SRC_DIR = path.resolve(__dirname, "src");

// Now you can use .env variables in webpack as well
const dotenv = require("dotenv").config({ path: `${__dirname}/.env` });

const config = {
  entry: {
    path: `${SRC_DIR}/index.js`,
  },
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
    publicPath: "/",
    pathinfo: false,
  },
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)
    modules: ["node_modules", `${SRC_DIR}`],
  },
  module: {
    rules: [
      {
        test: /(\.scss|css)$/,
        include: `${SRC_DIR}/`,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(html)$/,
        include: `${SRC_DIR}/index.html`,
        exclude: [/(node_modules|bower_components)/],
        use: {
          loader: "html-loader",
          options: {
            minimize: false,
          },
        },
      },
      {
        test: /\.js?/,
        include: [`${SRC_DIR}`],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env"],
            },
          },
          "eslint-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|svg)(\?[a-z0-9=.]+)?$/,
        include: `${SRC_DIR}/`,
        loader: "url-loader?limit=10000&name=images/[hash].[ext]"
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: true,
      verbose: true,
      cleanStaleWebpackAssets: true,
    }),
    new HtmlWebpackPlugin({
      template: `${SRC_DIR}/index.html`,
      filename: `${DIST_DIR}/index.html`,
      inject: false,
    }),
    new webpack.ProgressPlugin(),
  ],
};

module.exports = config;
