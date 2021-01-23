import React, { FunctionComponent } from 'preact/compat'
import Navigation from '../../containers/NavigationContainer'

const Header: FunctionComponent = () => (
    <header>
        <h1>Concert Diary</h1>
        <Navigation />
    </header>
)

export default Header
