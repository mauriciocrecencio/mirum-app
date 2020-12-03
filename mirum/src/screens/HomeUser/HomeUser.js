import React from "react";
import "./HomeUser.css";

class HomeUser extends React.Component {
 

  render() {
    return (
      <main className="button">
        <button onClick={() => this.props.handlePage('/register')}>Cadastrar</button>
      </main>
    );
  }
}

export default HomeUser;
