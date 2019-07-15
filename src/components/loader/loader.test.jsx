import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Loader from './Loader'

describe('Loading', () => {
    it('should render correctly', () => {
        const component = shallow(<Loader />)
        const tree = shallowToJson(component)
        expect(tree).toMatchSnapshot()
    })
})
