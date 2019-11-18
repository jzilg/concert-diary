import React, { ReactElement } from 'react'
import { connect } from 'react-redux'
import State from '../redux/interfaces/State'
import { Festivals } from '../entities/Festival'
import festivalsSortedByDateSelector from '../redux/selectors/festivalsSortedByDateSelector'
import { deleteFestival as deleteFestivalActionCreator } from '../redux/actions/app/festivals.actions'
import Navigation from './Navigation'
import LoadData from './LoadData'
import FestivalsTable from '../components/festivals-table'

type Props = StateProps & DispatchProps

function ShowFestivals(props: Props): ReactElement {
    const { festivals, deleteFestival } = props

    return (
        <>
            <h1>Festival Diary</h1>
            <Navigation />
            <LoadData festivals>
                <FestivalsTable festivals={festivals} deleteFestival={deleteFestival} />
            </LoadData>
        </>
    )
}

type StateProps = {
    festivals: Festivals
}

const mapStateToProps = (state: State): StateProps => ({
    festivals: festivalsSortedByDateSelector(state),
})

type DispatchProps = {
    deleteFestival: Function
}

const mapDispatchToProps: DispatchProps = {
    deleteFestival: deleteFestivalActionCreator,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowFestivals)
