import React from "react";
import InputField from "../InputField/InputFIeld";
import Label from "../Label/Label";

class InputAddress extends React.Component {
  render() {
    return (
      <div>
        <Label for="street" label="Endereço 1" />
        <InputField type="text" id="street" placeholder="Rua Batel" />
      </div>
    );
  }
}

export default InputAddress;
