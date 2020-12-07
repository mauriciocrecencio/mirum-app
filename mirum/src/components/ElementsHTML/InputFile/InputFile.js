import React from "react";
import "./InputFile.scss";

class InputFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "input__file",
      imageURI: null,
    };
  }

  buildImgTag() {
    let imgTag = null;
    if (this.state.imageURI !== null) {
      imgTag = <img className="thumbnail" src={this.state.imageURI}></img>;
    }
    return imgTag;
  }

  readURI(e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = function (ev) {
        this.setState({ imageURI: ev.target.result });
        this.props.submitPhoto(ev.target.result);
      }.bind(this);
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  handleChange(e) {
    this.readURI(e);
    if (this.props.onChange !== undefined) this.props.onChange(e);
  }

  render() {
    let imgTag = this.buildImgTag();
    if (this.props.photo != null) {
      imgTag = <img className="thumbnail" src={this.props.photo}></img>;
    }
    return (
      <div className="container__photo">
        <label htmlFor={this.state.id} className="photo">
          {this.props.photo == null ? (
            <div id="uploadTitle"> Carregue sua foto</div>
          ) : (
            imgTag
          )}
        </label>
        <input
          id={this.state.id}
          type="file"
          onChange={this.handleChange.bind(this)}
          className="show-for-sr"
        />
      </div>
    );
  }
}
export default InputFile;
