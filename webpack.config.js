const webpack = require("webpack");
const path = require("path");

/**
 * Webpack Config
 */
module.exports = {
    entry: "./lib/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "ricado.api.client.js",
        library: "RICADOGen4API",
        libraryTarget: "var",
    },
    module: {},
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
        }),
    ],
    performance: {
        hints: false
    }
};
