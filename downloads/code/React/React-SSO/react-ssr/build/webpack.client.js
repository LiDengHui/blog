const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, '../src/client/index.tsx'),
    mode: 'development',
    output: {
        filename: 'scripts/[name].bundle.js',
        path: path.join(__dirname, '../dist/assets')
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../src/client/template/index.html')
        })
    ]
}