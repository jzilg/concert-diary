const STORAGE = window.sessionStorage

export function setStorageData(id: string, data: unknown): void {
    STORAGE.setItem(id, JSON.stringify(data))
}

// must return undefined instead of null
// otherwise the redux store throws an error on init
export function getStorageData(id: string): unknown | undefined {
    const persistedData = STORAGE.getItem(id)

    if (persistedData !== null) {
        return JSON.parse(persistedData)
    }

    return undefined
}
