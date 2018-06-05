const webpack = require('webpack')
const path = require('path')

const config = {
    entry: {
        app: [ path.resolve(__dirname, '../client/js/index.js') ]
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    }
}

module.exports = config