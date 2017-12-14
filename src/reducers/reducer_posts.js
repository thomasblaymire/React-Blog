import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function( state = {}, action) {
  switch (action.type) {

    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');

    case FETCH_POST:
        return { ...state, [action.payload.data.id]: action.payload.data };

    default:
      return state;
  }
}


/* In the reducer Fetch Post we reference the current post via action.payload.data
   - Then we set the new state to the current state by ...state
   - Then we use the newState to add the post.id

   ES5:    case FETCH_POST:
           const post = action.payload.data;
           const newState { ...state,  };
           newState[post.id] = post;
           return newState;

    ES6:   return { ...state, [action.payload.data.id]: action.payload.data };
