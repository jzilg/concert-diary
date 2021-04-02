import React, { FunctionComponent } from 'preact/compat'
import MostSeenBand from '../../entities/MostSeenBand'
import style from './mostSeenBands.module.scss'

type Props = {
    mostSeenBands: MostSeenBand[]
}

const MostSeenBands: FunctionComponent<Props> = (props) => {
    const { mostSeenBands } = props

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
            <caption>
                <h3>Most Seen Bands</h3>
            </caption>
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
