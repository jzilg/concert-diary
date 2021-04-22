import React, { FunctionComponent } from 'react'
import MostCommonCompanion from '../../entities/MostCommonCompanion'
import style from '../most-seen-bands/mostSeenBands.module.scss'

export type Props = {
    mostCommonCompanions: MostCommonCompanion[]
}

const MostCommonCompanionsTable: FunctionComponent<Props> = (props) => {
    const { mostCommonCompanions } = props

    const rowElements = mostCommonCompanions.map((mostCommonCompanion) => {
        const {
            name,
            totalCount,
            festivalCount,
            concertCount,
        } = mostCommonCompanion

        return (
            <tr key={name}>
                <td>{name}</td>
                <td className={style.centeredCol}>{totalCount}</td>
                <td className={style.centeredCol}>{concertCount}</td>
                <td className={style.centeredCol}>{festivalCount}</td>
            </tr>
        )
    })

    return (
        <table className={style.table}>
            <caption>
                <h3>Most Common Companion</h3>
            </caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th className={style.centeredCol}>Total</th>
                    <th className={style.centeredCol}>Concerts</th>
                    <th className={style.centeredCol}>Festivals</th>
                </tr>
            </thead>
            <tbody>
                {rowElements}
            </tbody>
        </table>
    )
}

export default MostCommonCompanionsTable
