import { useState } from 'preact/compat'
import { StateUpdater } from 'preact/hooks'

type OnChange = (event) => void

const useFormInput = (initialValue: string): [string, OnChange, StateUpdater<string>] => {
    const [value, setValue] = useState(initialValue)

    const handleChange = (event): void => {
        setValue(event.target.value)
    }

    return [
        value,
        handleChange,
        setValue,
    ]
}

export default useFormInput
