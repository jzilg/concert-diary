import { useState } from 'preact/compat'

// type OnChange = (event: ChangeEvent<HTMLInputElement>) => void
type SetValue = (value) => void

function useFormInput(initialValue: string): [string, (event) => void, SetValue] {
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
