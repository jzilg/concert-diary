import type { NavLinks } from '../../entities/NavLink'

const navLinksSelector = (): NavLinks => [
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

export default navLinksSelector
