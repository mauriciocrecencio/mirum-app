import React from "react";
import FormUser from "../../components/FormUser/FormUser";
import './Register.scss'

class Register extends React.Component {
  render() {
    return (
      <div className="container__register">
        <aside className="container__picture">

        </aside>
        <section className="container__form">

        <FormUser />
        </section>
      </div>
    );
  }
}

export default Register;
