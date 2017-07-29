import React from 'react'
import Grid from '../Grid/Grid'
import Row from '../Row/Row'
import {mount,shallow} from 'enzyme'

describe('<Row />', () => {

  var factoryWrapper;
  const Cell = () => (<a>****</a>)
  const Hello = () => (<a>hello</a>)
  const World = () => (<a>world</a>)

  beforeAll(() => {
    const children = props => () => {
      return props.items.map((Item,i) => <Item key={i} />)
    }
    factoryWrapper = props => (
      <Row>{children(props)}</Row>
    )
  })

  it('should render the child passed in', () => {
    {
      const items = [Cell]
      const wrapper = shallow(factoryWrapper({items}))
      const expected = '<section><a>****</a></section>'
      expect(wrapper.html()).toEqual(expected)
    }
    {
      const items = [Cell, Cell, Cell]
      const wrapper = shallow(factoryWrapper({items}))
      const expected = '<section><a>****</a><a>****</a><a>****</a></section>'
      expect(wrapper.html()).toEqual(expected)
    }
    {
      const items = [Hello, World]
      const wrapper = shallow(factoryWrapper({items}))
      const expected = '<section><a>hello</a><a>world</a></section>'
      expect(wrapper.html()).toEqual(expected)
    }
  })

  it('should nest as many children as items passed in', () => {
    {
      const wrapper = shallow(factoryWrapper({items:[Cell]}))
      const first = wrapper.children().at(0)
      expect(first.type()).toEqual(Cell)
      expect(first.contains(<Cell />))
    }
    {
      const wrapper = shallow(factoryWrapper({items:[Hello, World]}))
      const first = wrapper.children().at(0)
      expect(first.type()).toEqual(Hello)
      expect(first.contains(<Hello />)).toEqual(true)
      expect(first.find(Hello).length).toEqual(1)
      const second = wrapper.children().at(1)
      expect(second.type()).toEqual(World)
      expect(second.contains(<World />)).toEqual(true)
      expect(second.find(World).length).toEqual(1)
    }
  })
})
