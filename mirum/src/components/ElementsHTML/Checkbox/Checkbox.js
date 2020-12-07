import React from 'react'
import Label from '../Label/Label'

class Checkbox extends React.Component {
  render() {
    return (
      <div className="container__checkbox">
        <input defaultChecked={this.props.defaultValue} onChange={() => this.props.getCheckboxValue()} type="checkbox" id="subscribeNews" />
        <Label for="subscribeNews" label="Desejo receber novidades por e-mail"/>
      </div>
    )
  }
}

export default Checkbox