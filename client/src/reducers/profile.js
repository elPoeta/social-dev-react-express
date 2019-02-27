import {
  GET_PROFILE,
  GET_PROFILES,
  CREATE_PROFILE,
  CLEAR_PROFILE,
  LOADING
} from "../actions/types";
const initialState = {
  profile: null,
  profiles: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case CREATE_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null
      };
    default:
      return state;
  }
};
