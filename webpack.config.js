// entry -> output
const path = require('path')

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_module/,
        },{
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
            test: /\.s?css$/,
        }]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }

}
