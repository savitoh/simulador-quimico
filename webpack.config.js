var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    // Change to your "entry-point".
    // *entry: './src/ts/main/app',*/
    entry: {
        'bundle.min.css': [
          path.resolve(__dirname, 'assets/css/index.css')
          /*path.resolve(__dirname, 'src/css/local.css')*/
        ],
        'app.bundle.js': [
          path.resolve(__dirname, './src/ts/main/app')
        ]
    },
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'dist'),
        /*filename: 'app.bundle.js'*/
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                // Include ts, tsx, and js files.
                test: /\.(tsx?)|(js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: 'css-loader'
                })
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin("bundle.min.css"),
    ]
};