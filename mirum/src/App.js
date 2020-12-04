import React from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";
import HomeUser from "./screens/HomeUser/HomeUser";
import Register from './screens/Register/Register.js'

class App extends React.Component {
  handlePage = (url) => {
    this.props.history.push(url);
  };

  render() {
    return (
      <main>
        <ParticlesBackground/>
        <Switch>
          <Route path="/" exact>
            <HomeUser handlePage={this.handlePage} />
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/confirm"></Route>

        </Switch>

      </main>
    );
  }
}

export default withRouter(App);
