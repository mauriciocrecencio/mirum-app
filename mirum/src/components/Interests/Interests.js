import React from "react";
import "./Interest.scss";

class Interests extends React.Component {
  state = {
    interest: "",
    interests: this.props.defaultValue ?? [],
  };

  onChange = (e) => {
    if (e.nativeEvent.data == "," || e.nativeEvent.data == "enter") {
      this.setState({
        ...this.state,
        interests: [...this.state.interests, this.state.interest],
        interest: "",
      });
      document.getElementById("input__interest").value = "";
      // Props
      return;
    }
    // Props
    this.setState({ ...this.state, interest: e.target.value });
  };
  async commitChanges(e) {
    await this.onChange(e);
    this.props.getInterests(this.state.interests)
  }
  removeInterest = (e, index) => {
    this.state.interests.splice(index, 1);
    this.setState({ ...this.state, interests: this.state.interests });
  };
  render() {
    return (
      <div>
        <label htmlFor="input__interest">Interesse</label>
        <input
          placeholder="Separe por vígula"
          id="input__interest"
          type="text"
          onChange={(e) => this.commitChanges(e)}
        />
        <div className="box__interest">
          {this.state.interests.map((interest, index) => (
            <div
              onClick={(e) => this.removeInterest(e, index)}
              className="interest"
              key={index}
            >
              {interest}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Interests;
