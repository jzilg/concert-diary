import { createSelector } from 'reselect'
import { NavLinks } from '../../entities/NavLink'
import { Concerts } from '../../entities/Concert'
import { Festivals } from '../../entities/Festival'
import concertsSelector from './concertsSelector'
import festivalsSelector from './festivalsSelector'

function createId(list): number {
    const getHighestId = (accumulator, item): number => {
        const accumulatorIsHigher = accumulator > item.id
        return accumulatorIsHigher ? accumulator : item.id + 1
    }

    return list.reduce(getHighestId, 0)
}

function getNavigationLinks(concerts: Concerts, festivals: Festivals): NavLinks {
    const newConcertUrl = `/concerts/edit?id=${createId(concerts)}`
    const newFestivalUrl = `/festivals/edit/${createId(festivals)}`

    const navLinks: NavLinks = [
        {
            url: '/concerts',
            label: 'Concerts',
        },
        {
            url: '/festivals',
            label: 'Festivals',
        },
        {
            url: '/statistics',
            label: 'Statistics',
        },
        {
            url: newConcertUrl,
            label: 'Add new concert',
        },
        {
            url: newFestivalUrl,
            label: 'Add new festival',
        },
    ]

    return navLinks
}

const navLinksSelector = createSelector(
    concertsSelector,
    festivalsSelector,
    getNavigationLinks,
)

export default navLinksSelector
