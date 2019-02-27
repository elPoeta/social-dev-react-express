import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import profile from "./profile";
import errors from "./error";

export default combineReducers({
  auth,
  profile,
  errors,
  form: formReducer
});
