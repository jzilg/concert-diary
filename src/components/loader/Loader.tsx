import React, { ReactElement } from 'react'
import style from './loader.scss'

type Props = {
    isLoading: boolean
}

function Loader(props: Props): ReactElement | null {
    const { isLoading } = props

    if (isLoading === false) {
        return null
    }

    return <div className={style.bar} />
}

export default Loader
