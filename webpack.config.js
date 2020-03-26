var HtmlWebPackPlugin = require('html-webpack-plugin');
var path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
});

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
      },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
    plugins: [htmlPlugin],
    devServer: {
        historyApiFallback: true,
      }
};