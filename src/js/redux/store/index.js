import { createStore, applyMiddleware, compose } from 'redux';
import middleware from '../middleware';
import rootReducer from '../modules';


function _createStore() {
  const store = createStore(
    rootReducer,
    {}, // initial state
    compose(
      applyMiddleware(...middleware),
      // Enable Redux Devtools on the browser, for easy state debugging
      // if not production and not running on server
      // (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined')
      //   ? window.__REDUX_DEVTOOLS_EXTENSION__()
      //   : f => f,
    )
  );

  return store;
}

export default _createStore;
