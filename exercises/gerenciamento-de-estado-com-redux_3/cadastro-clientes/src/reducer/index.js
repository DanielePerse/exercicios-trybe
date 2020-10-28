import { LOGIN } from '../actions';

const INITIAL_STATE_LOGIN = {
  value: '',
}

function loginReducer(state = INITIAL_STATE_LOGIN, action) {
  switch(action.type) {
    case LOGIN:
      return {...state, [action.value]: action.value};
    default:
      return state;
  }
}

export default loginReducer;