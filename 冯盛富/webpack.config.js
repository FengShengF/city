var htmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
var cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: ['./src/main.js'],
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new cleanWebpackPlugin('dist')
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(jpg|png|gif|svg|eot|woff)$/,
                use: 'url-loader'
            }
        ]
    },
    devServer: {
        port: 8080,
        open: true,
        inline: true,
        hot: true,
        contentBase: __dirname
    }
}