require('dotenv').config()

const modeIsDev = process.env.NODE_ENV === 'development'

/** @type { import("snowpack").SnowpackUserConfig } */
module.exports = {
    env: {
        API_URL: process.env.API_URL,
    },
    alias: {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
    },
    exclude: [
        '**/node_modules/**/*',
        '**/.idea/*',
        '**/Dockerfile',
        '**/LICENSE',
    ],
    plugins: [
        '@snowpack/plugin-typescript',
        ['@snowpack/plugin-sass', {
            native: true,
            style: modeIsDev ? 'expanded' : 'compressed',
        }],
    ],
    buildOptions: {
        sourcemap: modeIsDev,
    },
    routes: [
        {
            match: 'routes',
            src: '.*',
            dest: '/index.html',
        },
    ],
    optimize: {
        minify: !modeIsDev,
        treeshake: true,
        sourcemap: modeIsDev,
        target: 'es2020',
    },
}
