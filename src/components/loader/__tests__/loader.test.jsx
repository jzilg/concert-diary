import React from 'preact/compat'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Loader from '../Loader'

describe('Loading', () => {
    it('should render correctly if isLoading is true', () => {
        const component = shallow(<Loader isLoading />)
        const tree = shallowToJson(component)

        expect(tree).toMatchSnapshot()
    })

    it('should render correctly if isLoading is false', () => {
        const component = shallow(<Loader isLoading={false} />)
        const tree = shallowToJson(component)

        expect(tree).toMatchSnapshot()
    })
})
