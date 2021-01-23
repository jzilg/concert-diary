import React, { FunctionComponent } from 'preact/compat'
import { Link } from 'react-router-dom'
import { NavLinks } from '../../entities/NavLink'
import style from './navigation.scss'

export type Props = {
    navLinks: NavLinks
}

const Navigation: FunctionComponent<Props> = (props) => {
    const { navLinks } = props

    const linkElements = navLinks.map((link) => (
        <li key={`${link.url}-${link.label}`} className={style.listItem}>
            <Link to={link.url}>
                {link.label}
            </Link>
        </li>
    ))

    return (
        <nav>
            <ul>
                {linkElements}
            </ul>
        </nav>
    )
}

export default Navigation
