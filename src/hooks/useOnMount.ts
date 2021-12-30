import { useEffect } from 'preact/compat'

const useOnMount = (fn: () => void): void => {
    useEffect(fn, []) // eslint-disable-line react-hooks/exhaustive-deps
}

export default useOnMount
