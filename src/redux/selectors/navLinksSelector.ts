import State from '../State'
import { NavLinks } from '../../entities/NavLink'

function navLinksSelector(state: State): NavLinks {
    return [
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
            url: 'concerts/new',
            label: 'Add new concert',
        },
        {
            url: 'festivals/new',
            label: 'Add new festival',
        },
    ]
}

export default navLinksSelector
