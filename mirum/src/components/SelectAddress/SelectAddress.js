import React from "react";

class SelectAddress extends React.Component {
  render() {
    return (
      <select name="address" id="address">
        <option value="" selected disabled hidden>Selecione</option>
        <option value="house">Casa</option>
        <option value="company">Empresa</option>
      </select>
    );
  }
}

export default SelectAddress;
