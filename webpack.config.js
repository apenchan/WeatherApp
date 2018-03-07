const path = require('path');// lets define to absolute path

module.exports = {
  // the entry file for the bundle, Webpack will crawl into all the files connected
  entry: path.join(__dirname, '/client/src/App.js'),

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js'
  },

  module: {

    // apply loaders to files that meet given conditions
    // were using babel-loader with presets for react and es2015
    loaders: [
      {
        test: /\.js?$/,
        include: path.join(__dirname, '/client/src'),
        loader: 'babel-loader',
        query: {
          presets: ["react", "es2015"]
        }
      },
      {
        // The important stuff
        test: /\.(jpg|jpeg|png)(\?.*)?$/, // Load only .jpg .jpeg, and .png files
        include: path.join(__dirname, '/server/static/assets'),
        use: {
          loader: 'file-loader', 
          options: {
            name: '[name][md5:hash].[ext]', // Name of bundled asset
            outputPath: 'webpack-assets/', // Output location for assets. Final: `app/assets/webpack/webpack-assets/`
            publicPath: '/server/static/assets' // Endpoint asset can be found at on Rails server
          }
        }
      }
    ]
  },
  devtool: "source-map",//Lets get a better error handling - we can see all orrors in the termianl
  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true
};