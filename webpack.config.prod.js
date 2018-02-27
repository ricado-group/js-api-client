const webpack = require('webpack'); // Access built-in plugins
const path = require('path');

module.exports = {
   entry: './dist/es5/index.js',
   output: {
      path: path.resolve(__dirname, 'dist/browser'),
      filename: 'ricado.api.client.js',
      library: 'RICADOGen4API',
      libraryTarget: 'var'
   },
   module: {},
   plugins: [
      /* new webpack.optimize.UglifyJsPlugin({ mangle: true, sourcemap: false }), // This is now on by default in production mode */
      new webpack.DefinePlugin({
         'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
   ],
}
