import { AUTH_USER, ERROR_MESSAGE } from "./types";

export const signUp = formData => async dispatch => {

  try {
    const response = await fetch("http://localhost:5000/api/user/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(formData)
    });
    const data = await response;


    if (data.status === 400 || data.status === 404 || data.status === 403) {
      const error = await data.json();
      dispatch({ type: ERROR_MESSAGE, payload: error });
      //throw Error(data.statusText);
    } else
      if (data.status === 401) {
        const error = { password: 'Access Denied' };
        dispatch({ type: ERROR_MESSAGE, payload: error });
      }


    const json = await data.json();


    dispatch({
      type: AUTH_USER,
      payload: { isAuthenticated: true, user: json.user }
    });
    localStorage.setItem("token", json.user.jwt);
  } catch (error) {
    console.log('error', error);
    dispatch({ type: ERROR_MESSAGE, payload: "Email is in use" });
  }
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

    if (data.status === 400 || data.status === 404 || data.status === 403) {
      const error = await data.json();
      dispatch({ type: ERROR_MESSAGE, payload: error });
      //throw Error();
    } else
      if (data.status === 401) {
        const error = { password: 'Access Denied' };
        dispatch({ type: ERROR_MESSAGE, payload: error });
      }

    const json = await data.json();

    dispatch({
      type: AUTH_USER,
      payload: { isAuthenticated: true, user: json.user }
    });
    localStorage.setItem("token", json.user.jwt);
  } catch (error) {
    console.log('error', error);
    // dispatch({ type: ERROR_MESSAGE, payload: "Wrong Email or Password" });
  }
};

export const logout = () => dispatch => {
  localStorage.removeItem("token");
  dispatch({
    type: AUTH_USER,
    payload: { isAuthenticated: false, user: {} }
  });
};

