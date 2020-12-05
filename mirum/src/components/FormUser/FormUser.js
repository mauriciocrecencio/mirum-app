import React from "react";
import "./FormUser.scss";
import Slider from "../Slider/Slider";
import InputField from "../ElementsHTML/InputField/InputFIeld";
import Label from "../ElementsHTML/Label/Label";
import SelectLocation from "../ElementsHTML/SelectLocation/SelectLocation";
import SelectTypeAddress from "../ElementsHTML/SelectTypeAddress/SelectTypeAddress";
import InputAddress from "../ElementsHTML/InputAddress/InputAddress";

class FormUser extends React.Component {
  constructor(props) {
    super(props);
    // Não chame this.setState() aqui!
    this.state = {
      firstName: "",
      surname: "",
      age: "",
      email: "",
      phone: "",
      typeAddress: "",
      street: "",
      number: "",
      neighbor: "",
    };
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  getSliderValue = (value) => {
    // this.setState({...this.state, age: value})
    return value;
  };

  onChange = (e, field) => {
    this.setState({ ...this.state, [field]: e.target.value });
    console.log(this.state);
  };

  render() {
    return (
      <form className="form" onSubmit={(e) => this.submitForm(e)}>
        <div className="section__field name">
          <Label for="name" label="Nome" />
          <InputField
            onChange={this.onChange}
            type="text"
            id="name"
            placeholder="Primeiro nome"
          />
          <InputField type="text" id="surname" placeholder="Sobrenome" />
        </div>
        <Slider getSliderValue={this.getSliderValue} />

        <div className="section__field email">
          <Label for="email" label="E-mail" />
          <InputField type="email" id="email" placeholder="david@example.com" />
        </div>
        <div className="section__field phone">
          <Label for="phone" label="Telefone" />
          <InputField type="tel" id="phone" placeholder="(41) 99999-9999" />
        </div>
        {/* <SelectLocation /> */}
        <Label for="address" label="Endereço" />

        <SelectTypeAddress />
        <InputAddress />
        <button>Confirmar</button>
      </form>
    );
  }
}

export default FormUser;
