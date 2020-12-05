import React from "react";
import FormUser from "../../components/FormUser/FormUser";
import "./Register.scss";
import ParticlesBackground from "../../components/ParticlesBackground/ParticlesBackground";
import InputFile from '../../components/ElementsHTML/InputFile/InputFile'

class Register extends React.Component {
  render() {
    return (
      <div>
        <ParticlesBackground />
        <div className="container__register">
          <aside className="container__picture">
          <InputFile/>
          </aside>
          <section className="container__form">
            <FormUser />
          </section>
        </div>
      </div>
    );
  }
}

export default Register;
