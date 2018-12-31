const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
  return {
    mode: env.NODE_ENV, //"production"
    entry: {
      app: "./src/scripts/index.js"
    },
    output: {
      filename: "[name]-bundle.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/"
    },
    // Change to production source maps
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: /\.(css|scss)$/,
          use: [
            "style-loader",
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            "file-loader",
            {
              loader: "image-webpack-loader",
              options: {
                bypassOnDebug: true, // webpack@1.x
                disable: true // webpack@2.x and newer
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(["dist"]),
      new HtmlWebpackPlugin({
        title: "Production"
      }),
      new HtmlWebpackPlugin({
        template: "public/index.html",
        favicon: "public/assets/img/favicon.ico"
      }),
      new MiniCssExtractPlugin({
        filename: "style.css"
      })
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors-bundle",
            chunks: "all"
          }
        }
      }
    }
  };
};
