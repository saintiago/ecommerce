const path = require('path');
const FlowWebpackPlugin = require('flow-webpack-plugin');

module.exports = {

    mode: 'development',

    target: 'node',

    entry: {
        test: path.resolve(__dirname, 'src/common/test.js'),
        domain: path.resolve(__dirname, 'src/domain/index.js'),
        front: path.resolve(__dirname, 'src/front/index.js'),
        order: path.resolve(__dirname, 'src/order/index.js'),
        stock: path.resolve(__dirname, 'src/stock/index.js')
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    devtool: 'cheap-module-eval-source-map',

    //watch: true,

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src')
            }
        ]
    },

    plugins: [
        new FlowWebpackPlugin({
            failOnError: true,
            failOnErrorWatch: true,
            printFlowOutput: true,
            verbose: false,
        })
    ],
}