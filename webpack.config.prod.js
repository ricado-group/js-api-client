const webpack = require('webpack'); // Access built-in plugins

module.exports = {
   entry: './dist/es5/index.js',
   output: {
      path: __dirname + '/dist/browser/',
      filename: 'gen4.ricado.api.client.js',
      library: 'RicadoAPI',
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
