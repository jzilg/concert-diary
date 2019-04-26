import React, { ReactElement } from 'react'
import { MostSeenBand } from '../redux/selectors/mostSeenBandsSelector'

interface Props {
    mostSeenBands: MostSeenBand[]
}

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

export default MostSeenBands
