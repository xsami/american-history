import React, { Component } from "react";
import Radium from "radium";

import { connect } from "react-redux";

import Headline from "../../components/headline";
import Board from "../../components/board";

class AppContainer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Headline>Title Goes Here</Headline>
          </div>
        </div>
        <Board />
      </div>
    );
  }
}

const mapStateToProp = state => ({
  state
});

export default connect(mapStateToProp)(AppContainer);
