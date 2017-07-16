import React from 'react'
import Grid from './Grid'
import Column from '../Column/Column'
import {shallow} from 'enzyme'

describe('<Grid />', () => {

  var factoryWrapper;
  const Cell = () => (<a>****</a>)

  beforeAll(() => {
    factoryWrapper = props => <Grid {...props} />
  })

  it('is a div wrapper', () => {
    let wrapper = shallow(factoryWrapper({}));
    expect(wrapper.type()).toBe('div')
  })

  it('should nest as many children as columns passed in', () => {
    {
      const wrapper = shallow(factoryWrapper({}))
      expect(wrapper.children().length).toEqual(0);
    }
    {
      const matrix = [[Cell]]
      const wrapper = shallow(factoryWrapper({matrix}))
      expect(wrapper.children().at(0).type()).toEqual(Column);
      expect(wrapper.children().at(1).type()).toEqual(null);
      expect(wrapper.children().length).toEqual(1);
    }
    {
      const matrix = [[Cell, Cell, Cell],[Cell, Cell], [Cell]]
      const wrapper = shallow(factoryWrapper({matrix}))
      expect(wrapper.children().at(0).type()).toEqual(Column);
      expect(wrapper.children().at(1).type()).toEqual(Column);
      expect(wrapper.children().at(2).type()).toEqual(Column);
      expect(wrapper.children().at(4).type()).toEqual(null);
      expect(wrapper.children().length).toEqual(3);
    }
  })
})
