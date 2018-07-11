var path = require("path");
var webpack = require("webpack");
const umdOutput = {
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "youpin-img.umd.js",
        library: "youpin-img",
        libraryTarget: "umd"
    }
};
const cjsOutput = {
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "youpin-img.cjs.js",
        library: "youpin-img",
        libraryTarget: "commonjs"
    },
    externals: ["url"],
};
const config = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "youpin-img.umd.js",
        library: "youpin-img",
        libraryTarget: "umd"
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                query: {}
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: "source-map"
};
function clone(obj){
    return JSON.parse(JSON.stringify(obj));
}
module.exports = [

    {
        ...config,
        ...umdOutput
    },
    {
        ...config,
        ...cjsOutput
    },
];
