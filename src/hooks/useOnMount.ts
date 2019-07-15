import { useEffect } from 'react'

function useOnMount(callback: () => void, cleanup: Function = undefined): void | Function {
    useEffect(callback, [])
    return cleanup
}

export default useOnMount
