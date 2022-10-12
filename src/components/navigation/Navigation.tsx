import type { FC } from 'preact/compat'
import React from 'preact/compat'
import { Link } from 'react-router-dom'
import LogoutIcon from 'react-bootstrap-icons/dist/icons/box-arrow-right'
import type { NavLinks } from '../../entities/NavLink'
import style from './navigation.module.scss'

export type Props = {
    navLinks: NavLinks
    logout: () => void
}

const Navigation: FC<Props> = (props) => {
    const { navLinks, logout } = props

    const linkElements = navLinks.map((link) => (
        <li key={`${link.url}-${link.label}`}>
            <Link to={link.url} className={style.link}>
                {link.label}
            </Link>
        </li>
    ))

    return (
        <nav>
            <ul className={style.list}>
                {linkElements}
                <li>
                    <button
                        onClick={() => { logout() }}
                        className={style.button}
                        type="button"
                    >
                        Logout
                        <LogoutIcon />
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
