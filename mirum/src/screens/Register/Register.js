import React from "react";
import FormUser from "../../components/FormUser/FormUser";
import "./Register.scss";
import ParticlesBackground from "../../components/ParticlesBackground/ParticlesBackground";
import InputFile from "../../components/ElementsHTML/InputFile/InputFile";
import { connect } from "react-redux";
import { submitUserData, submitPhoto } from "../../actions/index";
class Register extends React.Component {
  render() {
    return (
      <div className="container__register">
        <InputFile
          photo={this.props.photo}
          submitPhoto={this.props.submitPhoto}
          getUserImg={this.props.getUserImg}
        />
    
    <div className="vertical__row"/>
      
    
        <FormUser
          user={this.props.user}
          onSubmit={this.props.submitUserData}
          handlePage={this.props.handlePage}
        />
      </div>
    );
  }
}
const mapStateToProps = (store) => ({
  user: store.user,
  photo: store.user.photo,
});

const mapDispatchToProps = (dispatch) => ({
  submitUserData: (user) => dispatch(submitUserData(user)),
  submitPhoto: (photo) => dispatch(submitPhoto(photo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
