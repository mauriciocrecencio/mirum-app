import React from "react";
import "../FormUser/FormUser.scss";
class Resume extends React.Component {
  render() {
    const {
      name,
      surname,
      email,
      age,
      state,
      country,
      newsletters,
      phone,
      interests
    } = this.props.user;
    const formatAge = {
      0: "entre 13 e 19 anos",
      33: "entre 20 e 29 anos",
      66: "entre 30 e 45 anos",
      100: "mais de 45 anos",
    };
   
    return (
      <section className="container__confirm">
        Eu sou <strong>{name + " " + surname}</strong> e eu tenho{" "}
        <strong>{formatAge[age]}</strong>.Você pode enviar e-mails para <strong>{email}</strong>. Eu moro no
        estado do <strong>{state}</strong>, no país <strong>{country}</strong>. Eu gosto muito de <strong>{interests.map(interest => interest + ', ')}</strong>
      <br/>
      <br/>

        <strong>
        {newsletters
          ? "Por-favor me envie newsletters"
          : "Eu não gostaria de receber newsletters"}
          </strong>. Para me contatar ligue no telefone <strong>{phone}</strong>
        <br />
        <br />
        <br />
        <br />
        <br />
        <button id="button">Confirmar </button>
      </section>
    );
  }
}

export default Resume;
