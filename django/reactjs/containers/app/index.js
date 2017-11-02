import React, { Component } from "react";
import Radium from "radium";

import { connect } from "react-redux";

import * as counterActions from "../../actions/counterActions";
import Headline from "../../components/headline";
import Card from "../../components/card";

@connect(state => ({
  counters: state.counters
}))
@Radium
export default class AppContainer extends Component {
  handleClick() {
    let { dispatch } = this.props;
    dispatch(counterActions.increaseCounter());
  }

  render() {
    let { counters } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Headline>Historia Americana</Headline>
            <Card name={'Joaquin Balaguer'} img={'http://backtofront.london/wp-content/uploads/2016/03/01_vv_logo.png'}/>
            {/* <div style={[styles.button]} onClick={() => this.handleClick()}>
              INCREASE
            </div>
            <p style={[styles.counter]}>{counters.clicks}</p>
            <p>{process.env.BASE_API_URL}</p> */}
          </div>
        </div>
      </div>
    );
  }
}
