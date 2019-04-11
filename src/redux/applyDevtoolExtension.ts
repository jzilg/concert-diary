declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: Function
    }
}

export default function applyDevtoolExtension(): Function {
    /* eslint-disable no-underscore-dangle */
    const browserExtensionIsInstalled = window.__REDUX_DEVTOOLS_EXTENSION__
    return browserExtensionIsInstalled ? window.__REDUX_DEVTOOLS_EXTENSION__() : store => store
    /* eslint-enable */
}
