import React, { useState, ReactElement } from 'react'

interface Props {
    list: string[]
    onChange: (event) => void
}

function ListInput({ list, onChange }: Props): ReactElement {
    const separator = ', '
    const initValueString = list.join(separator)
    const [valueString, setValueString] = useState(initValueString)

    function changeHandler(event): void {
        const newValueString = event.target.value
        const newList: string[] = newValueString.split(separator)
        setValueString(newValueString)
        onChange(newList)
    }

    return <input type="text" value={valueString} onChange={changeHandler} />
}

export default ListInput
