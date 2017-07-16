import React, {Component} from 'react'
import Grid from './components/Grid/Grid'

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const Cell = (props) => {
      const {className,style} = props
      return <span {...{className,style}}>{props.text}</span>
    }

    const c = text => () => <Cell text={text} />

    const _ = () => <Cell className="no-shadow" style={{width:12,border:'1px solid #000'}} />
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

    const X = c('X')

    return (
      <div>
        <section>
          <h2>TicTaeToc</h2>
          <Grid matrix={[
            [_,X,_]
            ,[_,X,_]
            ,[O,X,O]
          ]} />
        </section>

        <section>
          <h2>Periodic Table</h2>
          <Grid matrix={[
            [H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,He]
            ,[Li,Be,_,_,_,_,_,_,_,_,_,_,_,B,C,N,O,F,Ne]
            ,[H,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,He]
          ]} />
        </section>
      </div>
    )
  }
}
