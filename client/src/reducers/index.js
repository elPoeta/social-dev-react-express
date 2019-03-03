import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import profile from "./profile";
import post from "./post";
import errors from "./error";

export default combineReducers({
  auth,
  profile,
  post,
  errors,
  form: formReducer
});
