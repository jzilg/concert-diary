import { useState } from 'react'
import { InputList } from '../components/list-input/ListInput'

function useListInput(initialValue): [InputList, (list: InputList) => void, Function] {
    const [value, setValue]: [InputList, Function] = useState(initialValue)

    function handleChange(list: InputList): void {
        setValue(list)
    }

    return [
        value,
        handleChange,
        setValue,
    ]
}

export default useListInput
