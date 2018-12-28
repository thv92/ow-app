const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');


module.exports = (env, argv) => { 
    const SERVER_PATH = argv.mode == 'production' ? 
                    './src/server/server-prod.js' : './src/server/server-dev.js';
    return {
        entry: {
            server: SERVER_PATH,
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
            filename: '[name].js',
        },
        target: 'node',
        node: {
            __dirname: false,
            __filename: false
        },
        externals: [nodeExternals()],
        module: {
            rules : [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
            ]
        }
    };
}