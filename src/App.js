import React from "react";
import { User } from "./User";
import { Main } from "./Main";
import "./App.css";
import { connect } from "react-redux";

class App extends React.Component {
  changeUsername(newName) {}

  render() {
    return (
      <div className="container">
        <Main changeUsername={() => this.props.setName("Anna")} />
        <User username={this.props.user.name} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    math: state.math
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => {
      dispatch({
        type: "SET_NAME",
        payload: name
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// Luego lo que se tiene que hacer es determinar:
// Cuales partes de mi estado necesita cada componente y cuales son las acciones que yo requiero hacer dispatch
