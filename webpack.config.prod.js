const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

//Optimizations
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    // devServer: {
    //     hot: true,
    // },
    target: 'web',
    // devtool: '#source-map',
    optimization: {
        minimizer: [
            new uglifyJsPlugin({
                cache: true,
                parallel: true,
                // sourceMap: true,
            }),
            new optimizeCssAssetsPlugin()
        ]
    },
    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve('url-loader'),
                        options: {
                            limit:10000,
                            name: 'static/media/[name].[hash:8].[ext]'
                        }
                    },
                    {
                        test: /\.js$/,
                        loader: ['babel-loader'],
                        exclude: /node_modules/
                    },
                    {
                        test: /\.css$/,
                        use: [
                            require.resolve('style-loader'),
                            {
                                loader: require.resolve('css-loader'),
                                options: {
                                    importLoaders: 1,
                                    modules: true,
                                    localIdentName: '[name]_[local]_[hash:base64]'
                                }
                            },
                            {
                                loader: require.resolve('postcss-loader'),
                                options: {
                                    ident: 'postcss',
                                    plugins: (loader) => [
                                        require('postcss-flexbugs-fixes'),
                                        require('postcss-import')({ root: loader.resourcePath }),
                                        require('postcss-preset-env')
                                        ({
                                            browsers: ['last 1 version',
                                            '> 1%',
                                            'maintained node versions',
                                            'not dead',
                                            'not ie < 9'
                                            ],
                                            autoprefixer: {
                                                flexbox: 'no-2009'
                                            }
                                        }),
                                        require('cssnano')()
                                    ]
                                }
                            }
                        ]
                    },
                    {   
                        //Catch all assets that do not match loaders specification
                        loader: require.resolve('file-loader'),
                        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
                        options: {
                            name: 'static/media/[name].[hash:8].[ext]'
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            options: {
                'title': 'OW APP'
            },
            excludeChunks: ['server']
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CaseSensitivePathsPlugin(),
    ],
};