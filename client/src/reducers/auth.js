import { ERROR_MESSAGE, AUTH_USER } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  jwt: "",
  errorMessage: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        jwt: action.payload.token,
        errorMessage: ''
      };
    case ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};
