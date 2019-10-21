import actions from './actions';
import initialState from './initialState.js';

export default (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
}
