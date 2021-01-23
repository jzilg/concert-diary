import { useEffect } from 'preact/compat'

function useOnMount(
    callback: () => void,
    cleanup: Function | undefined = undefined,
): void | Function {
    useEffect(callback, [])
    return cleanup
}

export default useOnMount
