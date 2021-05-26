import React from 'preact/compat'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import ConcertForm from '../ConcertForm'
import concerts from '../../../../mock-data/concerts.json'

describe('Loading', () => {
    const goToConcerts = jest.fn()
    const saveConcert = jest.fn()

    it.skip('should render correctly', () => {
        const component = shallow((
            <ConcertForm
                concert={concerts[0]}
                goToConcerts={goToConcerts}
                saveConcert={saveConcert}
            />
        ))
        const tree = shallowToJson(component)

        expect(tree).toMatchSnapshot()
    })
})
