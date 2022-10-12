import type { FC } from 'preact/compat'
import React from 'preact/compat'
import Navigation from '../navigation'
import style from './header.module.scss'

const Header: FC = () => (
    <header className={style.container}>
        <h1>Concert Diary</h1>
        <Navigation />
    </header>
)

export default Header
