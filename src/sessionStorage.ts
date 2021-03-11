const STORAGE = window.sessionStorage

export function setStorageData(id: string, data: unknown): void {
    STORAGE.setItem(id, JSON.stringify(data))
}

export function getStorageData(id: string): unknown | undefined {
    const persistedData = STORAGE.getItem(id)

    // must return undefined instead of null
    // otherwise the redux store throws an error on init
    if (persistedData === null) {
        return undefined
    }

    return JSON.parse(persistedData)
}
