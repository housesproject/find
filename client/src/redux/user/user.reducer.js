import UserActionTypes from './userActionTypes';

const INITIAL_STATE = {
  user: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UserActionTypes.FETCH_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}

export default userReducer;