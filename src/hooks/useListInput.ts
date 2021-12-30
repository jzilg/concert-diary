import { useState } from 'preact/compat'
import { InputList } from '../components/list-input/ListInput'

type SetValue = (value) => void
type ReturnType = [InputList, (list: InputList) => void, SetValue]

const useListInput = (initialValue: InputList): ReturnType => {
    const [value, setValue]: [InputList, SetValue] = useState(initialValue)

    const handleChange = (list: InputList): void => {
        setValue(list)
    }

    return [
        value,
        handleChange,
        setValue,
    ]
}

export default useListInput
