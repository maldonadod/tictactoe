import React, {Component} from 'react'
import Grid from './components/Grid/Grid'

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const Cell = ({className,text}) => <span className={className}>{text}</span>

    const c = text => () => <Cell text={text} />

    const _ = () => <Cell className="no-shadow" text="&nbsp;" />
    const H = c('H')
    const He = c('HE')
    const Li = c('Li')
    const Be = c('Be')
    const Ne = c('Ne')
    const F = c('F')
    const O = c('O')
    const N = c('N')
    const C = c('C')
    const B = c('B')

    return (
      <div><Grid matrix={[
        [H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,He]
        ,[Li,Be,_,_,_,_,_,_,_,_,_,_,_,B,C,N,O,F,Ne]
        ,[H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,He]
      ]} /></div>
    )
  }
}
