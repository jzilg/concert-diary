import { useState } from 'preact/compat'

type OnChange = (event) => void
type SetValue = (value) => void

function useFormInput(initialValue: string): [string, OnChange, SetValue] {
    const [value, setValue]: [string, SetValue] = useState(initialValue)

    function handleChange(event): void {
        setValue(event.target.value)
    }

    return [
        value,
        handleChange,
        setValue,
    ]
}

export default useFormInput
