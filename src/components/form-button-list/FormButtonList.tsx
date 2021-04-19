import React, { FC } from 'preact/compat'
import style from './formButtonList.module.scss'

const FormButtonList: FC = (props) => {
    const { children } = props

    return (
        <ul className={style.container}>
            {children}
        </ul>
    )
}

export default FormButtonList
