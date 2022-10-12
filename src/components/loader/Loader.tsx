import type { FC } from 'preact/compat'
import React from 'preact/compat'
import style from './loader.module.scss'

export type Props = {
    isLoading: boolean
}

const Loader: FC<Props> = (props) => {
    const { isLoading } = props

    if (!isLoading) {
        return null
    }

    return <div className={style.bar} />
}

export default Loader
