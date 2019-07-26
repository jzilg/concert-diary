import { useState } from 'react'
import { InputList } from '../components/list-input/ListInput'

type SetValue = (value) => void

function useListInput(initialValue): [InputList, (list: InputList) => void, SetValue] {
    const [value, setValue]: [InputList, SetValue] = useState(initialValue)

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
