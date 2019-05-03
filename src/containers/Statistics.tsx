import React, { Fragment, ReactElement } from 'react'
import { connect } from 'react-redux'
import State from '../redux/interfaces/state.interface'
import mostSeenBandsSelector, { MostSeenBand } from '../redux/selectors/mostSeenBandsSelector'
import numOfBandsSelector from '../redux/selectors/numOfBandsSelector'
import numOfFestivalsSelector from '../redux/selectors/numOfFestivalsSelector'
import numOfLocationsSelector from '../redux/selectors/numOfLocationsSelector'
import Navigation from './Navigation'
import LoadData from './LoadData'
import MostSeenBands from '../components/MostSeenBands'
import GeneralStatistics from '../components/GeneralStatistics'

interface Props extends StateProps {}

function Statistics(props: Props): ReactElement {
    const {
        mostSeenBands,
        totalNumOfConcerts,
        totalNumOfFestivals,
        totalNumOfBands,
        totalNumOfLocations,
    } = props

    return (
        <Fragment>
            <h1>Statistics</h1>
            <Navigation />
            <LoadData concerts festivals>
                <GeneralStatistics
                    totalNumOfBands={totalNumOfBands}
                    totalNumOfConcerts={totalNumOfConcerts}
                    totalNumOfFestivals={totalNumOfFestivals}
                    totalNumOfLocations={totalNumOfLocations}
                />
                <MostSeenBands mostSeenBands={mostSeenBands} />
            </LoadData>
        </Fragment>
    )
}

interface StateProps {
    mostSeenBands: MostSeenBand[]
    totalNumOfConcerts: number
    totalNumOfFestivals: number
    totalNumOfBands: number
    totalNumOfLocations: number
}

const mapStateToProps = (state: State): StateProps => ({
    mostSeenBands: mostSeenBandsSelector(state),
    totalNumOfConcerts: state.concerts.length,
    totalNumOfFestivals: numOfFestivalsSelector(state),
    totalNumOfBands: numOfBandsSelector(state),
    totalNumOfLocations: numOfLocationsSelector(state),
})

export default connect(mapStateToProps)(Statistics)
