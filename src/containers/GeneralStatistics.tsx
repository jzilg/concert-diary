import React, { ReactElement } from 'react'
import { connect } from 'react-redux'
import State from '../redux/interfaces/state.interface'
import numOfBandsSelector from '../redux/selectors/numOfBandsSelector'
import numOfLocationsSelector from '../redux/selectors/numOfLocationsSelector'

interface Props extends StateProps {}

function GeneralStatistics(props: Props): ReactElement {
    const {
        totalNumOfConcerts,
        totalNumOfBands,
        totalNumOfLocations,
    } = props

    const list = [
        {
            label: 'Total number of Concerts',
            value: totalNumOfConcerts,
        },
        {
            label: 'Total number of Bands',
            value: totalNumOfBands,
        },
        {
            label: 'Total number of Locations',
            value: totalNumOfLocations,
        },
    ]

    const listElements = list.map(item => (
        <li key={item.label}>
            {`${item.label}: ${item.value}`}
        </li>
    ))

    return (
        <section>
            <h3>General</h3>
            <ul>
                {listElements}
            </ul>
        </section>
    )
}

interface StateProps {
    totalNumOfConcerts: number
    totalNumOfBands: number
    totalNumOfLocations: number
}

const mapStateToProps = (state: State): StateProps => ({
    totalNumOfConcerts: state.concerts.length,
    totalNumOfBands: numOfBandsSelector(state),
    totalNumOfLocations: numOfLocationsSelector(state),
})

export default connect(mapStateToProps)(GeneralStatistics)
