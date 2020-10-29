import { NEW_ELEMENT } from './actions';

const INITIAL_STATE = {};

function formReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case NEW_ELEMENT:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

export default formReducer;