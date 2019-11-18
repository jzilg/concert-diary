import React, { ReactElement, ReactNode } from 'react'
import { connect } from 'react-redux'
import State from '../redux/types/state'
import useOnMount from '../hooks/useOnMount'
import { fetchConcerts } from '../redux/actions/app/concerts.actions'
import { fetchFestivals } from '../redux/actions/app/festivals.actions'

type Props = StateProps & DispatchProps & {
    children: ReactNode
    concerts?: boolean
    festivals?: boolean
}

function LoadData(props: Props): ReactElement {
    const {
        concerts,
        concertsAreLoaded,
        loadConcerts,
        festivals,
        festivalsAreLoaded,
        loadFestivals,
        children,
    } = props
    const shouldLoadConcerts = concerts
    const shouldLoadFestivals = festivals

    useOnMount(() => {
        if (shouldLoadConcerts && !concertsAreLoaded) {
            loadConcerts()
        }

        if (shouldLoadFestivals && !festivalsAreLoaded) {
            loadFestivals()
        }
    })

    return (
        <>
            {children}
        </>
    )
}

LoadData.defaultProps = {
    concerts: false,
    festivals: false,
}

type StateProps = {
    concertsAreLoaded: boolean
    festivalsAreLoaded: boolean
}

const mapStateToProps = (state: State): StateProps => ({
    concertsAreLoaded: state.concerts.length > 0,
    festivalsAreLoaded: state.festivals.length > 0,
})

type DispatchProps = {
    loadConcerts: Function
    loadFestivals: Function
}

const mapDispatchToProps: DispatchProps = {
    loadConcerts: fetchConcerts,
    loadFestivals: fetchFestivals,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadData)
