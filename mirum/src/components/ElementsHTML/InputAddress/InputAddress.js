import React from "react";
import InputField from "../InputField/InputFIeld";
import Label from "../Label/Label";
import './InputeAddress.scss'

class InputAddress extends React.Component {
  render() {
    return (
      <div className="container__address">
        <Label for="street" label="Endereço" />
        <InputField defaultValue={this.props.defaultValue} onChange={this.props.onChange} type="text" id="address"  />
      </div>
    );
  }
}

export default InputAddress;
