import React from "react";

class SelectTypeAddress extends React.Component {
  render() {
    return (
        <select name="addressType" id="addressType" onChange={(e) => this.props.onChange(e, 'addressType')}>
          <option value="" selected disabled hidden>
            Selecione
          </option>
          <option value="house">Casa</option>
          <option value="company">Empresa</option>
        </select>
    );
  }
}

export default SelectTypeAddress;
