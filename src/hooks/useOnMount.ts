import { useEffect } from 'preact/compat'

function useOnMount(fn: () => void): void {
    useEffect(fn, [])
}

export default useOnMount
