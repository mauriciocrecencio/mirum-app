import { requirePropFactory } from '@material-ui/core';
import React from 'react'

class Label extends React.Component {
  render() {
    return ( 
    <label htmlFor={this.props.for}>{this.props.label}</label>
    )
  }
}

export default Label