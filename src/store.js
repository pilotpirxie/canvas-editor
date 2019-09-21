import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

// reducer
import reducer from "./reducers/";

// history object for react-router
export const history = createBrowserHistory();

// saga middleware for async redux actions
const sagaMiddleware = createSagaMiddleware();

// combining all reducers together
const rootReducer = combineReducers({
  ...reducer,
  router: connectRouter(history),
});

// dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store object
export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    ),
  )
);

sagaMiddleware.run(rootSaga);