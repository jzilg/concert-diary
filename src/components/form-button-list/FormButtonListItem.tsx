import React, { FunctionComponent } from 'preact/compat'
import style from './formButtonListItem.module.scss'

const FormButtonListItem: FunctionComponent = (props) => {
    const { children } = props

    return (
        <li className={style.wrapper}>
            {children}
        </li>
    )
}

export default FormButtonListItem
