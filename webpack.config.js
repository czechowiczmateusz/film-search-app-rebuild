const path = require('path');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            "@babel/plugin-proposal-class-properties",
                            "@babel/transform-runtime"
                        ]
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg|ttf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            outputPath: 'files',
                        },
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
};