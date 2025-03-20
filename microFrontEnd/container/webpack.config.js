const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  devServer: {
    port: 3001,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        products: "products@http://localhost:3000/remoteEntry.js",
      },
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
