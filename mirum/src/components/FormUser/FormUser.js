import React from "react";
import "./FormUser.scss";
import Slider from "../Slider/Slider";
import InputField from "../ElementsHTML/InputField/InputFIeld";
import Label from "../ElementsHTML/Label/Label";
import SelectLocation from "../ElementsHTML/SelectLocation/SelectLocation";
import SelectTypeAddress from "../ElementsHTML/SelectTypeAddress/SelectTypeAddress";
import InputAddress from "../ElementsHTML/InputAddress/InputAddress";
import Checkbox from "../ElementsHTML/Checkbox/Checkbox";
import Interests from '../Interests/Interests'

class FormUser extends React.Component {
  constructor(props) {
    super(props);
    const {
      name,
      surname,
      age,
      email,
      phone,
      typeAddress,
      address,
      newsletters,
      state,
      country,
      interests
    } = this.props.user;
    this.state = {
      name: name ?? "",
      surname: surname ?? "",
      age: age ?? "",
      email: email ?? "",
      phone: phone ?? "",
      typeAddress: typeAddress ?? "",
      address: address ?? "",
      newsletters: newsletters ?? "",
      state: state ?? null,
      country: country ?? null,
      interests: interests ?? null
    };
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.props.handlePage("/confirm");
  };

  getSliderValue = (e, value) => {
    this.setState({ ...this.state, age: value });
  };

  getCheckboxValue = () => {
    const checkedValue = document.querySelector("#subscribeNews").checked;
    this.setState({ ...this.state, newsletters: checkedValue });
  };

  onSelectTypeAddress = () => {
    const e = document.getElementById("addressType");
    const strUser = e.value;
    this.setState({ ...this.state, typeAddress: strUser });
  };
  getCountryAndState = (field, countryOrState) => {
   
    if (field === "state") {
      let state = document.getElementById(field).value;
      this.setState({ ...this.state, state });
    }
    if (field === "country") {
      let countryId = document.getElementById(field).value;
      let country = document.getElementById(field).options[countryId].text;
      this.setState({ ...this.state, country, countryId });
    }
  };
  getInterests = (interests) => {
    console.log(interests)
    this.setState({...this.state, interests})
  }

  onChange = (e, field) => {
    this.setState({ ...this.state, [field]: e.target.value });
  };

  render() {

    const {
      name,
      surname,
      age,
      email,
      phone,
      typeAddress,
      address,
      newsletters,
      state,
      countryId
    } = this.props.user;
    return (
      <form className="container__form" onSubmit={(e) => this.submitForm(e)}>
        <div className="section__field name">
          <Label for="name" label="Nome" />
          <InputField
            defaultValue={name}
            onChange={this.onChange}
            type="text"
            id="name"
            placeholder="Primeiro nome"
          />
          <InputField
            defaultValue={surname}
            onChange={this.onChange}
            type="text"
            id="surname"
            placeholder="Sobrenome"
          />
        </div>
        <Slider defaultValue={age} getSliderValue={this.getSliderValue} />

        <div className="section__field email">
          <Label for="email" label="E-mail" />
          <InputField
            defaultValue={email}
            onChange={this.onChange}
            type="email"
            id="email"
            placeholder="david@example.com"
          />
        </div>
        <div className="section__field phone">
          <Label for="phone" label="Telefone" />
          <InputField
            defaultValue={phone}
            onChange={this.onChange}
            type="tel"
            id="phone"
            placeholder="(41) 99999-9999"
          />
        </div>
        <SelectLocation defaultState={state} defaultCountry={countryId} getCountryAndState={this.getCountryAndState} />
        <div>
          <Label for="address" label="Tipo de endereço" />

          <SelectTypeAddress
            defaultValue={typeAddress}
            onSelectTypeAddress={this.onSelectTypeAddress}
          />
        </div>
        {this.state.typeAddress && (
          <InputAddress defaultValue={address} onChange={this.onChange} />
        )}
        <Interests getInterests={this.getInterests} defaultValue={this.state.interests}/>
        <Checkbox
          defaultValue={newsletters}
          getCheckboxValue={this.getCheckboxValue}
        />
        <div>
          <button id="button">Salvar</button>
        </div>
      </form>
    );
  }
}

export default FormUser;
