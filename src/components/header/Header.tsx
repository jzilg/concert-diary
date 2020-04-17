import React, { ReactElement } from 'react'
import Navigation from '../../containers/NavigationContainer'

function Header(): ReactElement {
    return (
        <header>
            <h1>Concert Diary</h1>
            <Navigation />
        </header>
    )
}

export default Header
