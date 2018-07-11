var path = require("path");
var webpack = require("webpack");
const umdOutput = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "youpin-img.umd.js",
        library: "youpin-img",
        libraryTarget: "umd"
    }
};
const cjsOutput = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "youpin-img.js",
        library: "YoupinImg",
        libraryTarget: "umd",
        globalObject: "this"
    },
    externals: ["url"],
};
const config = {
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
