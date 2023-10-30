const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    serviceWorker: "./src/serviceWorker.ts",
    contentScript: "./src/contentScript.tsx",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
};
