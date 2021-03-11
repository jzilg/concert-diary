import React, { FunctionComponent } from 'preact/compat'
import Navigation from '../navigation'
import style from './header.scss'

const Header: FunctionComponent = () => (
    <header className={style.container}>
        <h1>Concert Diary</h1>
        <Navigation />
    </header>
)

export default Header
