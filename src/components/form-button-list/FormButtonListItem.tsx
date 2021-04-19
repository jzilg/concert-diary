import React, { FC } from 'preact/compat'
import style from './formButtonListItem.module.scss'

const FormButtonListItem: FC = (props) => {
    const { children } = props

    return (
        <li className={style.wrapper}>
            {children}
        </li>
    )
}

export default FormButtonListItem
