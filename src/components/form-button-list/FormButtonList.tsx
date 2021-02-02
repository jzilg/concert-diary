import React, { FunctionComponent } from 'preact/compat'
import style from './formButtonList.scss'

const FormButtonList: FunctionComponent = (props) => {
    const { children } = props

    return (
        <ul className={style.container}>
            {children}
        </ul>
    )
}

export default FormButtonList