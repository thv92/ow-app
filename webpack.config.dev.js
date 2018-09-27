const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        hot: true
    },
    module: {
        rules: [
            {
                oneOf: [
                        // "url" loader works like "file" loader except that it embeds assets
                        // smaller than specified limit in bytes as data URLs to avoid requests.
                        // A missing `test` is equivalent to a match.
                        {
                            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                            loader: require.resolve('url-loader'),
                            options: {
                            limit: 10000,
                            name: 'static/media/[name].[hash:8].[ext]',
                            },
                        },
                        {
                            test: /\.js$/,
                            loader: ['babel-loader'],
                            exclude: /node_modules/
                        },
                        // "postcss" loader applies autoprefixer to our CSS.
                        // "css" loader resolves paths in CSS and adds assets as dependencies.
                        // "style" loader turns CSS into JS modules that inject <style> tags.
                        // In production, we use a plugin to extract that CSS to a file, but
                        // in development "style" loader enables hot editing of CSS.
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
                                    },
                                },
                                {
                                    loader: require.resolve('postcss-loader'),
                                    options: {
                                    // Necessary for external CSS imports to work
                                    // https://github.com/facebookincubator/create-react-app/issues/2677
                                    ident: 'postcss',
                                    plugins: () => [
                                        require('postcss-flexbugs-fixes'),
                                        autoprefixer({
                                        browsers: [
                                            '>1%',
                                            'last 4 versions',
                                            'Firefox ESR',
                                            'not ie < 9', // React doesn't support IE8 anyway
                                        ],
                                        flexbox: 'no-2009',
                                        }),
                                    ],
                                    },
                                },
                            ],
                        },
                        {
                            // "file" loader makes sure those assets get served by WebpackDevServer.
                            // When you `import` an asset, you get its (virtual) filename.
                            // In production, they would get copied to the `build` folder.
                            // This loader doesn't use a "test" so it will catch all modules
                            // that fall through the other loaders.
                            // Exclude `js` files to keep "css" loader working as it injects
                            // its runtime that would otherwise processed through "file" loader.
                            // Also exclude `html` and `json` extensions so they get processed
                            // by webpacks internal loaders.
                            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
                            loader: require.resolve('file-loader'),
                            options: {
                            name: 'static/media/[name].[hash:8].[ext]',
                            },
                        },
                    ]
            },
            
        ],
        
        
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            options: {
                'title': 'OW DB APP COOL'
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CaseSensitivePathsPlugin(),
    ],
};
