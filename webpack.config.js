const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/js/main.js',
    // output: {
    //     path: __dirname + "/dist",
    //     filename: 'bundle.js',
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:   
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['env']
                        }
                    }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        // options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ]
};

// todo
// eslint
