import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import * as serviceWorker from "utils/serviceWorker";
import { store, history } from "./store";

import App from "containers/App";
import "style/index.scss";

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root"),
);

serviceWorker.unregister();