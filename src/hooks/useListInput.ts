import { useState } from 'preact/compat'
import { InputList } from '../components/list-input/ListInput'

type SetValue = (value) => void

function useListInput(initialValue: InputList): [InputList, (list: InputList) => void, SetValue] {
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
