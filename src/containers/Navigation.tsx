import React, { ReactElement } from 'react'
import { connect } from 'react-redux'
import { Concerts } from '../entities/Concert.interface'
import State from '../redux/interfaces/state.interface'
import NavigationLinks from '../components/NavigationLinks'

interface Props extends StateProps {}

function Navigation(props: Props): ReactElement {
    const { concerts } = props

    function createId(): number {
        const getHighestId = (accumulator, concert): number => {
            const accumulatorIsHigher = accumulator > concert.id
            return accumulatorIsHigher ? accumulator : concert.id + 1
        }
        return concerts.reduce(getHighestId, 0)
    }

    const newConcertUrl = `edit/${createId()}`

    return (
        <nav>
            <NavigationLinks newConcertUrl={newConcertUrl} />
        </nav>
    )
}

interface StateProps {
    concerts: Concerts
}

const mapStateToProps = (state: State): StateProps => ({
    concerts: state.concerts,
})

export default connect(mapStateToProps)(Navigation)
