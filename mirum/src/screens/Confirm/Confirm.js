import React from "react";
import Resume from "../../components/Resume/Resume";
import InputFile from "../../components/ElementsHTML/InputFile/InputFile";
import "./Confirm.scss";
import { connect } from "react-redux";
import { submitUserData, submitPhoto } from "../../actions/index";

class Confirm extends React.Component {
  render() {
    return (
      <div className="container__resume">
        <section id="confirm__photo" className="container__photo">
          <InputFile
            submitPhoto={this.props.submitPhoto}
            photo={this.props.photo}
            getUserImg={this.props.getUserImg}
            history={this.props.history}
            imgSrc={this.props.imgSrc}
          />

          <label id="button__edit" htmlFor={"input__file"}>
            Editar foto
          </label>

          <label
            id="button__edit"
            onClick={() => this.props.history.push("/register")}
          >
            Editar perfil
          </label>
        </section>
        <div className="vertical__row" />

        <Resume handlePage={this.props.handlePage} user={this.props.user} />
      </div>
    );
  }
}
const mapStateToProps = (store) => ({
  user: store.user,
  photo: store.user.photo,
});

const mapDispatchToProps = (dispatch) => ({
  submitPhoto: (photo) => dispatch(submitPhoto(photo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);
