const webpack = require("webpack");
const path = require("path");
const packageJson = require("./package.json");

/**
 * Bundle Typescript declaration files into a single dist/index.d.ts.
 */
class DtsBundlePlugin {
  apply(compiler) {
    compiler.plugin("done", function () {
      var dts = require("dts-bundle");

      dts.bundle({
        name: packageJson.name,
        main: "types/index.d.ts",
        out: "../dist_browser/index.d.ts",
        outputAsModuleFolder: true,
      });
    });
  }
}

/**
 * Webpack Config
 */
module.exports = {
  entry: "./dist/index.js",
  output: {
    path: path.resolve(__dirname, "dist_browser"),
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
};
