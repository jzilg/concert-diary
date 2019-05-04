const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDevServer = process.argv[1].includes('webpack-dev-server')
const filename = '[name]-[contenthash]'

const getScriptLoaders = ({ typescriptIsUsed }) => [
    'babel-loader',
    typescriptIsUsed ? 'ts-loader' : null,
    'eslint-loader',
].filter(Boolean)

module.exports = {
    mode: !isDevServer ? 'production' : 'development',
    devtool: !isDevServer ? '' : 'source-map',
    entry: './src/index.tsx',
    output: {
        path: path.resolve('dist'),
        filename: `${filename}.js`,
        publicPath: isDevServer ? '/' : './',
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
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isDevServer,
                            modules: true,
                            localIdentName: '[name]-[local]',
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'initial',
                },
            },
        },
    },
    plugins: [
        !isDevServer ? new CleanWebpackPlugin() : null,
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: `${filename}.css`,
            chunkFilename: `${filename}.css`,
        }),
    ].filter(Boolean),
    devServer: {
        watchOptions: {
            ignored: /node_modules/,
            aggregateTimeout: 300,
            poll: 1000,
        },
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
