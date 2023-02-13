import webpack from "webpack"
import path from 'path'
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const production = process.env.NODE_ENV === "production";

module.exports = {
    entry: { myAppName: path.resolve(__dirname, "./src/index.js")},
    output: {
        path: path.resolve(__dirname, "./disk"),
        filename: production ? '[name].[contenthash].js' : '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(s(a|c)ss)$/,
                exclude: /node_modules/,
                use: [
                    production ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            sourceMap: !production
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: !production
                        }
                    },
                ],
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".scss"],
    },
    pluggins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            tittle: "Friend Lee",
            template: "./src/index.html",
            favicon: '.public/favicon.ico'
        }),
        new MiniCssExtractPlugin({
            filename: production ? "[name].[contenthash].css" : '[name].css'
        }),
    ],
    devSever: {
        port: 3001,
        hot: true,
    },
    mode: production ? "production" : "development"
}