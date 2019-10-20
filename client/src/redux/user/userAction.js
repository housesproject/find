import UserActionTypes from './userActionTypes';

export const fetchUser = (userRef) => dispatch => {
  userRef.onSnapshot(snapShot => {
     const currentUser = { 
       currentUser: {
          id: snapShot.id,
          ...snapShot.data()
        }}
        dispatch({type:UserActionTypes.FETCH_USER, payload: currentUser});
      });
  
}