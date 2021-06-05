const webpack = require("webpack");
const path = require("path");
const packageJson = require("./package.json");

/**
 * Bundle Typescript declaration files into a single lib/index.d.ts.
 */
class DtsBundlePlugin {
    apply(compiler) {
        compiler.plugin("done", function () {
            var dts = require("dts-bundle");
            
            dts.bundle({
                name: packageJson.name,
                main: "types/index.d.ts",
                out: "../lib/index.d.ts",
                outputAsModuleFolder: false,
            });
        });
    }
}

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
        new DtsBundlePlugin(),
    ],
    performance: {
        hints: false
    }
};
