import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import pollsReducer from "./reducers/polls";
import errorsReducer from "./reducers/errors";
import watchPolls from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(
    combineReducers({
      polls: pollsReducer,
      error: errorsReducer,
    }),
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(watchPolls);
  return store;
};
