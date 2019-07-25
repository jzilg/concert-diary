import { useState } from 'react'

function useListInput(initialValue): [string[], (list: string[]) => void, Function] {
    const [value, setValue]: [string[], Function] = useState(initialValue)

    function handleChange(list: string[]): void {
        setValue(list)
    }

    return [
        value,
        handleChange,
        setValue,
    ]
}

export default useListInput
