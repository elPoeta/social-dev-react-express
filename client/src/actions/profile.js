import {
  GET_PROFILE,
  CREATE_PROFILE,
  GET_PROFILES,
  CLEAR_PROFILE,
  LOADING,
  ERROR_MESSAGE
} from "../actions/types";

export const getProfile = () => async dispatch => {
  try {
    dispatch({ type: LOADING });
    const response = await fetch("http://localhost:5000/api/profile", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      }
    });
    const data = await response;
    if (data.status === 400 || data.status === 404 || data.status === 403) {
      return dispatch({ type: GET_PROFILE, payload: {} });
    }

    const profile = await data.json();
    dispatch({ type: GET_PROFILE, payload: profile });
  } catch (error) {
    console.log("error", error);
    dispatch({ type: GET_PROFILE, payload: {} });
  }
};

export const createProfile = formData => async dispatch => {
  try {
    const response = await fetch("http://localhost:5000/api/profile", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify(formData)
    });
    const data = await response;
    if (data.status === 400 || data.status === 404 || data.status === 403) {
      const error = await data.json();
      return dispatch({ type: ERROR_MESSAGE, payload: error });
    }
    const profile = await data.json();
    dispatch({ type: CREATE_PROFILE, payload: profile });
  } catch (error) {
    console.log(error);
  }
};

export const clearProfile = () => {
  return { type: CLEAR_PROFILE };
};
