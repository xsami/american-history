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

<<<<<<< HEAD
export default connect(mapStateToProp)(AppContainer);
=======
export default connect(mapStateToProp)(AppContainer)

>>>>>>> 4f8b40e58431f4d1dcbd898589b9f07b53e51b7a
