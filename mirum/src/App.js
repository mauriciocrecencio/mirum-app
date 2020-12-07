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
import Register from "./screens/Register/Register.js";
import Confirm from "./screens/Confirm/Confirm";
import Finish from './screens/Finish/Finish'

class App extends React.Component {
  handlePage = (url) => {
    this.props.history.push(url);
  };

  render() {
    return (
      <main>

        <Switch>
          <Route path="/" exact>
            <HomeUser handlePage={this.handlePage} />
          </Route>
          <Route path="/register">
            <Register handlePage={this.handlePage} />
          </Route>
          <Route path="/confirm">
            <Confirm handlePage={this.handlePage} history={this.props.history} />
          </Route>
          <Route path="/finish">
            <Finish history={this.props.history} />
          </Route>
        </Switch>
      </main>
    );
  }
}

export default withRouter(App);
