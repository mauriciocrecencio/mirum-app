import React from "react";

class SelectTypeAddress extends React.Component {
  render() {
    return (
        <select defaultValue={this.props.defaultValue} name="addressType" id="addressType" onChange={() => this.props.onSelectTypeAddress()}>
          <option selected disabled hidden>
            Selecione
          </option>
          <option value="house">Casa</option>
          <option value="company">Empresa</option>
        </select>
    );
  }
}

export default SelectTypeAddress;
