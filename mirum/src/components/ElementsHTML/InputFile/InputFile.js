import React from "react";
import "./InputImage.scss";

class ImageFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "input__file",
      imageURI: null,
    };
  }

  buildImgTag() {
    let imgTag = null;
    if (this.state.imageURI !== null)
      imgTag = (
        <div className="row">
          <div className="small-9 small-centered columns">
            <img className="thumbnail" src={this.state.imageURI}></img>
          </div>
        </div>
      );
    return imgTag;
  }

  readURI(e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = function (ev) {
        this.setState({ imageURI: ev.target.result });
      }.bind(this);
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  handleChange(e) {
    this.readURI(e);
    if (this.props.onChange !== undefined) this.props.onChange(e); 
  }

  render() {
    const imgTag = this.buildImgTag();

    return (
      <div>
        <div className="container__image">{imgTag}</div>
        <label htmlFor={this.state.id} className="image__container">
          Upload an image
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
export default ImageFile;
// React.render(<ImageFile />, document.getElementById('app'));
