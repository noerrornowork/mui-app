const path = require("path");

const webpack = require("webpack");

const htmlWebpackPlugin = require("html-webpack-plugin");
//解析.vue文件是需要的插件
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js"
    },
    // devServer: {
    //     open: true,
    //     port: 3025,
    //     contentBase: "src",
    //     hot: true
    // },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html"),
            filename: "index.html"
        }),
        new VueLoaderPlugin()  //有的.vue文件在装了vue-loader,vue-template-compiler之后还需要引用vue-loader中的lib下的plugin
    ],
    resolve: {
        alias: {
            "vue$": "../node_modules/vue/dist/vue.js"
        }
    },
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"]},
            { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"]},
            { test: /\.(jpg|png|bmp|gif|jpeg|svg)$/, use: "url-loader"},
            { test: /\.(eot|ttf|woff|woff2|svg)$/, use: "url-loader"},
            { test: /\.js$/, use: "babel-loader", exclude: /node_modules/},
            { test: /\.vue$/, use: "vue-loader"},
        ]
    }
};