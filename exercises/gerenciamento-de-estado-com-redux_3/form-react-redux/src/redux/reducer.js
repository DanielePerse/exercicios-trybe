import { NEW_ELEMENT } from './actions';

const INITIAL_STATE = {
  checkBox: false,
  name: '',
};

function formReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case NEW_ELEMENT:
      return {...state, [action.name]: action.value, checkBox: true};
    default:
      return state;
  }
}

export default formReducer;