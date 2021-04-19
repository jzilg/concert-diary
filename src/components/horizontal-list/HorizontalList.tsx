import React, { FC } from 'preact/compat'
import style from './horizontalList.module.scss'

const HorizontalList: FC = (props) => {
    const { children } = props
    const list = React.Children.toArray(children)

    const listItemElements = list.map((item) => (
        <li className={style.item}>
            {item}
        </li>
    ))

    return (
        <ul className={style.container}>
            {listItemElements}
        </ul>
    )
}

export default HorizontalList
