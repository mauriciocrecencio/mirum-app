import React from "react";
import "./Interest.scss";

class Interests extends React.Component {
  state = {
    interest: "",
    interests: this.props.defaultValue ?? [],
  };
  onChange = (e) => {
    if (e.nativeEvent.data == "," || e.nativeEvent.data == 'enter') {
      this.setState({
        ...this.state,
        interests: [...this.state.interests, this.state.interest],
        interest: "",
      });
      ;

      document.getElementById("input__interest").value = "";
      return
      // return this.props.getInterests(this.state.interests);
    }
    console.log(this.state)
    this.props.getInterests(this.state.interests);

    this.setState({ ...this.state, interest: e.target.value });
    console.log(this.state)

  };
  removeInterest = (e, index) => {
    this.state.interests.splice(index, 1);
    this.setState({ ...this.state, interests: this.state.interests });
  };
  render() {
    return (
      <div>
        <label  htmlFor="input__interest">Interesse</label>
        <input
        placeholder="Separe por vígula"
          id="input__interest"
          type="text"
          onChange={(e) => this.onChange(e)}
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
