const webpack = require('webpack'); // Access built-in plugins

module.exports = {
   entry: './dist/es5/index.js',
   output: {
      path: __dirname + '/dist/browser/',
      filename: 'gen4.ricado.api.client.js'
   },
   module: {
      /*
         // Uncomment this to have the JS linter run
         preLoaders: [
         {
         test: /\.jsx$|\.js$/,
         loader: 'eslint-loader',
         include: __dirname,
         exclude: /bundle\.js$/
         }
         ],
         */
         /*
         loaders: [
         { test: /\.css$/, loader: 'style-loader!css-loader' },
         { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
         { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'}
         ]
      */
   },
   plugins: [
      /* new webpack.optimize.UglifyJsPlugin({ mangle: true, sourcemap: false }), // This is now on by default in production mode */
      new webpack.DefinePlugin({
         'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
   ],
}
