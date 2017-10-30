var webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(__dirname + '/build')
var APP_DIR = path.resolve(__dirname + '/app')

var config = {
    entry: APP_DIR + '/render.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/' // where dev-server will serve content from
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/, // regex to match any file starting with js and optionally ending in x
                include: APP_DIR,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react']
                }
            }
        ]
    }
}

module.exports = config
