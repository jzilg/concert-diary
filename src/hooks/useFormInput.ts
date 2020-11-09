import { ChangeEvent, useState } from 'react'

type OnChange = (event: ChangeEvent<HTMLInputElement>) => void
type SetValue = (value) => void

function useFormInput(initialValue: string): [string, OnChange, SetValue] {
    const [value, setValue]: [string, SetValue] = useState(initialValue)

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        setValue(event.target.value)
    }

    return [
        value,
        handleChange,
        setValue,
    ]
}

export default useFormInput
