import React, { Fragment, ReactElement, ReactNode } from 'react'
import { connect } from 'react-redux'
import State from '../redux/interfaces/state.interface'
import useOnMount from '../hooks/useOnMount'
import { fetchConcerts } from '../redux/actions/app/concerts.actions'

interface Props extends StateProps, DispatchProps {
    children: ReactNode
}

function LoadConcerts(props: Props): ReactElement {
    const { concertsAreLoaded, loadConcerts, children } = props

    useOnMount(() => {
        if (!concertsAreLoaded) {
            loadConcerts()
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
}

const mapStateToProps = (state: State): StateProps => ({
    concertsAreLoaded: state.concerts.length > 0,
})

interface DispatchProps {
    loadConcerts: Function
}

const mapDispatchToProps: DispatchProps = {
    loadConcerts: fetchConcerts,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadConcerts)
