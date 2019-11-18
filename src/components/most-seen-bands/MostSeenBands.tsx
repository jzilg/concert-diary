import React, { ReactElement } from 'react'
import { MostSeenBand } from '../../redux/selectors/mostSeenBandsSelector'
import style from './mostSeenBands.scss'

type Props = {
    mostSeenBands: MostSeenBand[]
}

function MostSeenBands({ mostSeenBands }: Props): ReactElement {
    const rowElements = mostSeenBands.map((mostSeenBand) => {
        const {
            name,
            mainCount,
            supportCount,
            festivalCount,
            totalCount,
        } = mostSeenBand

        return (
            <tr key={name}>
                <td>{name}</td>
                <td className={style.centeredCol}>{totalCount}</td>
                <td className={style.centeredCol}>{mainCount}</td>
                <td className={style.centeredCol}>{festivalCount}</td>
                <td className={style.centeredCol}>{supportCount}</td>
            </tr>
        )
    })

    return (
        <table className={style.table}>
            <caption>Most Seen Bands</caption>
            <thead>
                <tr>
                    <th>Band</th>
                    <th className={style.centeredCol}>Sum</th>
                    <th className={style.centeredCol}>Main Act</th>
                    <th className={style.centeredCol}>Festival Act</th>
                    <th className={style.centeredCol}>Support Act</th>
                </tr>
            </thead>
            <tbody>
                {rowElements}
            </tbody>
        </table>
    )
}

export default MostSeenBands
