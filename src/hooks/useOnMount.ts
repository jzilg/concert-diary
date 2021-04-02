import { useEffect } from 'preact/compat'

function useOnMount(fn: () => void): void {
    useEffect(fn, []) // eslint-disable-line react-hooks/exhaustive-deps
}

export default useOnMount
