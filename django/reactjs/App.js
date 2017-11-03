import React, { Component } from "react";
import { render } from "react-dom";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { reducer } from "react-redux-sweetalert";

import * as reducers from "./reducers";
import AppContainer from "./containers/app";

const logger = createLogger();

const finalCreateStore = compose(
  applyMiddleware(thunk, logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const rootReducer = combineReducers({ sweetalert: reducer});
const store = finalCreateStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

render(<App />, document.getElementById("App"));
