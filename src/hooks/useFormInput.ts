import { ChangeEvent, useState } from 'react'

type onChange = (event: ChangeEvent<HTMLInputElement>) => void

function useFormInput(initialValue): [string, onChange, Function] {
    const [value, setValue]: [string, Function] = useState(initialValue)

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
