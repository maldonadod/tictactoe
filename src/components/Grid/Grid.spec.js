import React from 'react'
import Cell from '../Cell'
import Grid from './Grid'
import Row from '../Row/Row'
import {shallow,mount} from 'enzyme'

describe('<Grid />', () => {

  var factoryWrapper;
  beforeAll(() => {
    const children = matrix => () => (
      matrix ? matrix.map((c,row) => (
        <Row key={row}>
          {() => c.map((text,i) => <Cell text={text} key={i} />)}
        </Row>
      )) : ''
    )
    factoryWrapper = props => (
      <Grid>
        {children(props.matrix)}
      </Grid>
    )
  })

  it('is a div wrapper', () => {
    let wrapper = shallow(factoryWrapper({}));
    expect(wrapper.type()).toBe('div')
  })

  it('should nest as many children as rows passed in', () => {
    {
      const wrapper = shallow(factoryWrapper({}))
      expect(wrapper.children().length).toEqual(0);
    }
    {
      const matrix = [['']]
      const wrapper = shallow(factoryWrapper({matrix}))
      expect(wrapper.children().at(0).type()).toEqual(Row);
      expect(wrapper.children().at(1).type()).toEqual(null);
      expect(wrapper.children().length).toEqual(1);
    }
    {
      const matrix = [[Cell, Cell, Cell],[Cell, Cell], [Cell]]
      const wrapper = shallow(factoryWrapper({matrix}))
      expect(wrapper.children().at(0).type()).toEqual(Row);
      expect(wrapper.children().at(1).type()).toEqual(Row);
      expect(wrapper.children().at(2).type()).toEqual(Row);
      expect(wrapper.children().at(4).type()).toEqual(null);
      expect(wrapper.children().length).toEqual(3);
    }
  })
})
