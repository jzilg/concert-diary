import React, { FunctionComponent } from 'preact/compat'
import style from './horizontalList.scss'

const HorizontalList: FunctionComponent = (props) => {
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
