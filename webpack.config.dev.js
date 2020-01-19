const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports ={
    entry : './src/index.js',
    mode : "development",
    module : {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader'
                , 'css-loader'
            ]
        },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                include: path.join(__dirname),
                exclude: /(node_modules|dist) /,
                use: {
                    loader: 'babel-loader',
                
                }
            }]
    },
    devtool : 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template : './index.html',
            title: 'testJavascript',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath :'/'
    },
    
};