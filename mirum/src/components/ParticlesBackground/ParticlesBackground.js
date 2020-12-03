import React from "react";
import Particles from "react-particles-js";
import ParticlesParams from "./ParticlesParams.json";

class ParticlesBackground extends React.Component {
  render() {
    return (
        <Particles
          id="particles-js"
          params={ParticlesParams}
        />
    );
  }
}
export default ParticlesBackground;
