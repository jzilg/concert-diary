import { useState } from 'preact/compat'
import { StateUpdater } from 'preact/hooks'

type OnChange = (event) => void

function useFormInput(initialValue: string): [string, OnChange, StateUpdater<string>] {
    const [value, setValue] = useState(initialValue)

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
