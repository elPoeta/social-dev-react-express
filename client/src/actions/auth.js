import { AUTH_USER, ERROR_MESSAGE } from "./types";

export const signUp = formData => async dispatch => {
  console.log(formData)
  try {
    const response = await fetch("http://localhost:5000/api/user/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(formData)
    });
    const data = await response;
    if (!data.ok) {
      console.log('error if ')
      throw Error(data.statusText);
    }

    const json = await data.json();


    dispatch({
      type: AUTH_USER,
      payload: { isAuthenticated: true, token: json.token }
    });
    localStorage.setItem("token", json.token);
  } catch (error) {
    dispatch({ type: ERROR_MESSAGE, payload: "Email is in use" });
  }
};

export const logout = () => dispatch => {
  localStorage.removeItem("token");
  dispatch({
    type: AUTH_USER,
    payload: { isAuthenticated: false, token: '' }
  });
};

export const login = formData => async dispatch => {
  try {
    const response = await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(formData)
    });
    const data = await response;
    if (!data.ok) {
      throw Error(data.statusText);
    }

    const json = await data.json();

    dispatch({
      type: AUTH_USER,
      payload: { isAuthenticated: true, token: json.token }
    });
    localStorage.setItem("token", json.token);
  } catch (error) {
    dispatch({ type: ERROR_MESSAGE, payload: "Wrong Email or Password" });
  }
};
