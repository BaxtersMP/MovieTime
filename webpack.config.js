const webpack = require('webpack')
const path = require('path')

const config = {
    entry: {
        app: [ path.resolve(__dirname, 'app/client/views/index.js') ]
    },
    output: {
        path: path.join(__dirname, 'app/dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            }   
        ]
    }
}

module.exports = config