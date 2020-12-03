import React from "react";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import HomeUser from "./screens/HomeUser/HomeUser";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";
import './index.css'

class App extends React.Component {
  handlePage = (url) => {
    this.props.history.push(url)
  };
  render() {
    console.log(this.props)
    return (
      <main>
        <ParticlesBackground />
        <Switch>
          <Route path="/">
            <HomeUser handlePage={this.handlePage}/>
          </Route>
          <Route path="/register"></Route>
          <Route path="/confirm"></Route>
        </Switch>
      
      </main>

    );
  }
}

export default withRouter(App);
