import React, { Fragment, ReactElement, ReactNode } from 'react'
import { connect } from 'react-redux'
import State from '../redux/interfaces/state.interface'
import useOnMount from '../hooks/useOnMount'
import { fetchConcerts } from '../redux/actions/app/concerts.actions'
import { fetchFestivals } from '../redux/actions/app/festivals.actions'

interface Props extends StateProps, DispatchProps {
    children: ReactNode
}

function LoadConcerts(props: Props): ReactElement {
    const {
        concertsAreLoaded,
        loadConcerts,
        festivalsAreLoaded,
        loadFestivals,
        children,
    } = props

    useOnMount(() => {
        if (!concertsAreLoaded) {
            loadConcerts()
        }

        if (!festivalsAreLoaded) {
            loadFestivals()
        }
    })

    return (
        <Fragment>
            {children}
        </Fragment>
    )
}

interface StateProps {
    concertsAreLoaded: boolean
    festivalsAreLoaded: boolean
}

const mapStateToProps = (state: State): StateProps => ({
    concertsAreLoaded: state.concerts.length > 0,
    festivalsAreLoaded: state.festivals.length > 0,
})

interface DispatchProps {
    loadConcerts: Function
    loadFestivals: Function
}

const mapDispatchToProps: DispatchProps = {
    loadConcerts: fetchConcerts,
    loadFestivals: fetchFestivals,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadConcerts)
