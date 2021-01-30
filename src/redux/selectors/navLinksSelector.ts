import { NavLinks } from '../../entities/NavLink'

function navLinksSelector(): NavLinks {
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
            url: '/concerts/new',
            label: 'Add New Concert',
        },
        {
            url: '/festivals/new',
            label: 'Add New Festival',
        },
    ]
}

export default navLinksSelector
