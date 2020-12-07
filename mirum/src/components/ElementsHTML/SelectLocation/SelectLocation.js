import React from "react";
import * as countries from "../../../resources/countries.json";
import * as states from "../../../resources/states.json";
import Label from "../Label/Label";

class SelectLocation extends React.Component {
  state = {
    country: this.props.defaultCountry ?? null,
    state: this.props.defaultState ?? null,
  };

  onSelect = (field) => {
    const e = document.getElementById(field);
    const location = e.value;
    this.setState({ ...this.state, [field]: location });
    this.props.getCountryAndState(field, this.state);
  };

  render() {
    const countriesArray = countries.default.countries;
    const statesArray = states.default.states;
    return (
      <div>
        <Label for="country" label="País" />

        <select
          required
          name="country"
          id="country"
          onChange={() => this.onSelect("country")}
          // defaultValue={this.props.defaultCountry}
        >
          <option hidden>Selecione</option>
          {countriesArray.map((country, index) => (
            <option key={index} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>
        {this.state.country != null && (
          <>
            <Label for="state" label="Estado" />

            <select
            required
              defaultValue={this.props.defaultState}
              name="state"
              id="state"
              onChange={() => this.onSelect("state")}
            >
              <option selected disabled hidden>
                Selecione
              </option>
              {statesArray
                .filter((state) => state.country_id == this.state.country)
                .map((state, index) => (
                  <option key={index} value={state.name}>
                    {state.name}
                  </option>
                ))}
            </select>
          </>
        )}
      </div>
    );
  }
}

export default SelectLocation;
