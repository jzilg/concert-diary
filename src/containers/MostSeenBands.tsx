import React, { ReactElement } from 'react'
import { connect } from 'react-redux'
import mostSeenBandsSelector, { MostSeenBand } from '../redux/selectors/mostSeenBandsSelector'
import State from '../redux/interfaces/state.interface'

interface Props extends StateProps {}

function MostSeenBands({ mostSeenBands }: Props): ReactElement {
    const rowElements = mostSeenBands.map((mostSeenBand) => {
        const {
            name,
            mainCount,
            supportCount,
            totalCount,
        } = mostSeenBand

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>{totalCount}</td>
                <td>{mainCount}</td>
                <td>{supportCount}</td>
            </tr>
        )
    })

    return (
        <table>
            <caption>Most Seen Bands</caption>
            <thead>
                <tr>
                    <th>Band</th>
                    <th>Sum</th>
                    <th>Main Act</th>
                    <th>Support Act</th>
                </tr>
            </thead>
            <tbody>
                {rowElements}
            </tbody>
        </table>
    )
}

interface StateProps {
    mostSeenBands: MostSeenBand[]
}

const mapStateToProps = (state: State): StateProps => ({
    mostSeenBands: mostSeenBandsSelector(state),
})

export default connect(mapStateToProps)(MostSeenBands)
