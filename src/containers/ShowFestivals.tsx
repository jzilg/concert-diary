import React, { Fragment, ReactElement } from 'react'
import { connect } from 'react-redux'
import State from '../redux/interfaces/State'
import { Festivals } from '../entities/Festival'
import festivalsSortedByDateSelector from '../redux/selectors/festivalsSortedByDateSelector'
import { deleteFestival as deleteFestivalActionCreator } from '../redux/actions/app/festivals.actions'
import Navigation from './Navigation'
import LoadData from './LoadData'
import FestivalsTable from '../components/festivals-table'

interface Props extends StateProps, DispatchProps {}

function ShowFestivals(props: Props): ReactElement {
    const { festivals, deleteFestival } = props

    return (
        <Fragment>
            <h1>Festival Diary</h1>
            <Navigation />
            <LoadData festivals>
                <FestivalsTable festivals={festivals} deleteFestival={deleteFestival} />
            </LoadData>
        </Fragment>
    )
}

interface StateProps {
    festivals: Festivals
}

const mapStateToProps = (state: State): StateProps => ({
    festivals: festivalsSortedByDateSelector(state),
})

interface DispatchProps {
    deleteFestival: Function
}

const mapDispatchToProps: DispatchProps = {
    deleteFestival: deleteFestivalActionCreator,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowFestivals)
