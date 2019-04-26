import React, { Fragment, ReactElement } from 'react'
import { connect } from 'react-redux'
import State from '../redux/interfaces/state.interface'
import mostSeenBandsSelector, { MostSeenBand } from '../redux/selectors/mostSeenBandsSelector'
import numOfBandsSelector from '../redux/selectors/numOfBandsSelector'
import numOfLocationsSelector from '../redux/selectors/numOfLocationsSelector'
import Navigation from './Navigation'
import LoadConcerts from './LoadConcerts'
import MostSeenBands from '../components/MostSeenBands'
import GeneralStatistics from '../components/GeneralStatistics'

interface Props extends StateProps {}

function Statistics(props: Props): ReactElement {
    const {
        mostSeenBands,
        totalNumOfConcerts,
        totalNumOfBands,
        totalNumOfLocations,
    } = props

    return (
        <Fragment>
            <h1>Statistics</h1>
            <Navigation />
            <LoadConcerts>
                <GeneralStatistics
                    totalNumOfBands={totalNumOfBands}
                    totalNumOfConcerts={totalNumOfConcerts}
                    totalNumOfLocations={totalNumOfLocations}
                />
                <MostSeenBands mostSeenBands={mostSeenBands} />
            </LoadConcerts>
        </Fragment>
    )
}

interface StateProps {
    mostSeenBands: MostSeenBand[]
    totalNumOfConcerts: number
    totalNumOfBands: number
    totalNumOfLocations: number
}

const mapStateToProps = (state: State): StateProps => ({
    mostSeenBands: mostSeenBandsSelector(state),
    totalNumOfConcerts: state.concerts.length,
    totalNumOfBands: numOfBandsSelector(state),
    totalNumOfLocations: numOfLocationsSelector(state),
})

export default connect(mapStateToProps)(Statistics)
