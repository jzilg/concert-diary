import React, { FC } from 'preact/compat'

type Props = {
    totalNumOfConcerts: number
    totalNumOfFestivals: number
    totalNumOfBands: number
    totalNumOfLocations: number
}

const GeneralStatistics: FC<Props> = (props) => {
    const {
        totalNumOfConcerts,
        totalNumOfBands,
        totalNumOfFestivals,
        totalNumOfLocations,
    } = props

    const list = [
        {
            label: 'Total number of Concerts',
            value: totalNumOfConcerts,
        },
        {
            label: 'Total number of Festivals',
            value: totalNumOfFestivals,
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

    const listElements = list.map((item) => (
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

export default GeneralStatistics
