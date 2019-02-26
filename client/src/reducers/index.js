import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import errors from "./error";

export default combineReducers({
  auth,
  errors,
  form: formReducer
});
