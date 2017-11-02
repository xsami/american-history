import React, { Component } from "react";
import Radium from "radium";

import { connect } from "react-redux";

import Headline from "../../components/headline";
import Board from "../../components/board";

@connect(state => ({
  counters: state.counters
}))
@Radium
export default class AppContainer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Headline>Historia Americana</Headline>
          </div>
        </div>
        <Board />
      </div>
    );
  }
}
