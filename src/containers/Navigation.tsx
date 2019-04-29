import React, { ReactElement } from 'react'
import { connect } from 'react-redux'
import { Concerts } from '../entities/Concert.interface'
import { Festivals } from '../entities/Festival.interface'
import State from '../redux/interfaces/state.interface'
import NavigationLinks from '../components/NavigationLinks'

interface Props extends StateProps {}

function Navigation(props: Props): ReactElement {
    const { concerts, festivals } = props

    function createId(list): number {
        const getHighestId = (accumulator, item): number => {
            const accumulatorIsHigher = accumulator > item.id
            return accumulatorIsHigher ? accumulator : item.id + 1
        }
        return list.reduce(getHighestId, 0)
    }

    const newConcertUrl = `/concerts/edit/${createId(concerts)}`
    const newFestivaltUrl = `/festivals/edit/${createId(festivals)}`

    return (
        <nav>
            <NavigationLinks
                newConcertUrl={newConcertUrl}
                newFestivalUrl={newFestivaltUrl}
            />
        </nav>
    )
}

interface StateProps {
    concerts: Concerts
    festivals: Festivals
}

const mapStateToProps = (state: State): StateProps => ({
    concerts: state.concerts,
    festivals: state.festivals,
})

export default connect(mapStateToProps)(Navigation)
