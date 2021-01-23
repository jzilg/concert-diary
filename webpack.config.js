const webpack = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const dartSass = require('dart-sass')
const ESLintPlugin = require('eslint-webpack-plugin')

const isDevServer = process.argv?.includes('serve')
const filename = '[name]-[contenthash]'
const extensions = [
    '.js',
    '.jsx',
    '.ts',
    '.tsx',
]

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
        extensions,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader',
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'ts-loader',
                ],
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
        new Dotenv(),
        new ESLintPlugin({
            extensions,
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
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
