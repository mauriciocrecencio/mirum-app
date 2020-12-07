import React from "react";

class InputField extends React.Component {
  render() {
    return (
      <div>
        <input  defaultValue={this.props.defaultValue} onChange={(e) => this.props.onChange(e, this.props.id)} type={this.props.type} id={this.props.id} placeholder={this.props.placeholder}/>
      </div>
    );
  }
}

export default InputField