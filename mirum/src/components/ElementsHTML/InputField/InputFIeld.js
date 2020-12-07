import React from "react";

class InputField extends React.Component {
  render() {
    return (
      <div>
        {this.props.id === "name" ? (
          <input
          minLength={2}
          maxLength={20}
          pattern={"^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"}
            required={true}
            defaultValue={this.props.defaultValue}
            onChange={(e) => this.props.onChange(e, this.props.id)}
            type={this.props.type}
            id={this.props.id}
            placeholder={"Somente letras sem acento"}
          />
        ) : (
          <input
            required={true}
            defaultValue={this.props.defaultValue}
            onChange={(e) => this.props.onChange(e, this.props.id)}
            type={this.props.type}
            id={this.props.id}
            placeholder={this.props.placeholder}
          />
        )}
      </div>
    );
  }
}

export default InputField;
