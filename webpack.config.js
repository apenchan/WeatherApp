const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/client/src/App.js'),
    // entry: path.join(__dirname, '/controllers'),

    output: {
        path: path.join(__dirname, '/client/dist/js'),
        filename: 'app.js'
    },
    // module: {
    //     rules: [{
    //         test: /\.css$/,
    //         use: [
    //             'to-string-loader',
    //             'css-loader'
    //         ]
    //     }]
    // },
    module: {
        loaders: [{
            test: /\.(gif|png|jpe?g|svg)$/i,
            include: path.join(__dirname, '/server/static/assests'),
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  bypassOnDebug: true,
                },
              },
            ],
          },{
            test: /\.js?$/,
            include: path.join(__dirname, '/client/src'),
            loader: 'babel-loader',
            query: {
                presets: ["react", "es2015"]
            },

        },]},
 
    devtool: "source-map",
    watch: true
};