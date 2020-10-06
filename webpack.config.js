const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./public/javascripts/src/app.js",
  output: {
    path: path.join(__dirname, "/public/dist"),
    filename: "bundle.js",
    publicPath: "/public/dist",
  },
  resolve: {
    extensions: [".js", ".css", ".json"],
  },
  mode: "development",
  devServer: {
    proxy: {
      "/": "http://localhost:3000",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  devtool: "sourcemap",
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jquery: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
  ],
  node: {
    fs: "empty",
  },
};
