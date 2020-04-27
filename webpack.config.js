require('dotenv').config()
const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const dartSass = require('dart-sass')

const isDevServer = process.argv[1] && process.argv[1].includes('webpack-dev-server')
const filename = '[name]-[contenthash]'

const getScriptLoaders = ({ typescriptIsUsed }) => [
    'babel-loader',
    typescriptIsUsed ? 'ts-loader' : null,
    'eslint-loader',
].filter(Boolean)

module.exports = {
    mode: isDevServer ? 'development' : 'production',
    devtool: isDevServer ? 'source-map' : false,
    entry: path.resolve('src/index.tsx'),
    output: {
        path: path.resolve('dist'),
        filename: `${filename}.js`,
        publicPath: '/',
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
        ],
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: getScriptLoaders({
                    typescriptIsUsed: false,
                }),
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: getScriptLoaders({
                    typescriptIsUsed: true,
                }),
            },
            {
                test: /\.(s)?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isDevServer,
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[name]-[local]',
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevServer,
                            implementation: dartSass,
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        minimizer: [
            isDevServer ? null : new OptimizeCssAssetsPlugin(),
            isDevServer ? null : new TerserPlugin(),
        ].filter(Boolean),
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        isDevServer ? null : new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve('src/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: `${filename}.css`,
            chunkFilename: `${filename}.css`,
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new Dotenv(),
    ].filter(Boolean),
    devServer: {
        historyApiFallback: true,
        stats: {
            children: false,
            modules: false,
        },
        overlay: true,
    },
    stats: {
        entrypoints: false,
        modules: false,
    },
}
