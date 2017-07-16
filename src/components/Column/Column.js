import React, {Component} from 'react'

const Column = (props) => <section>{props.items.map((Cell,i) => <Cell key={i} />)}</section>
export default Column
