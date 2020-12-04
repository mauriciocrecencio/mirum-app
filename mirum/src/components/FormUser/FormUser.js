import React from "react";
import "./FormUser.scss";
import Slider from "../Slider/Slider";
import InputField from "../InputField/InputFIeld";
import Label from "../Label/Label";
import SelectLocation from "../SelectLocation/SelectLocation"
import SelectAddress from '../SelectAddress/SelectAddress'

class FormUser extends React.Component {
  state = {
    name: {
      firstName: "",
      surname: "",
    },
    age: "",
    email: "",
    phone: "",
  };
  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  getSliderValue = (value) => {
    // this.setState({ ...this.state, age: value });
  };

  render() {
    return (
      <form onSubmit={(e) => this.submitForm(e)}>
        <div className="section__field name">
          <Label for="name" label="Nome" />
          <InputField type="text" id="name" placeholder="Primeiro nome" />
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
        <SelectLocation/>
        <SelectAddress/>
        <button>Confirmar</button>
      </form>
    );
  }
}

export default FormUser;
