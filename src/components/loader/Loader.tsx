import React, { FunctionComponent } from 'preact/compat'
import style from './loader.scss'

export type Props = {
    isLoading: boolean
}

const Loader: FunctionComponent<Props> = (props) => {
    const { isLoading } = props

    if (isLoading === false) {
        return null
    }

    return <div className={style.bar} />
}

export default Loader
