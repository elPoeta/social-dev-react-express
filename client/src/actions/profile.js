import {
  GET_PROFILE,
  GET_ALL_PROFILES,
  CLEAR_PROFILE,
  PROFILE_LOADING,
  ERROR_MESSAGE
} from "../actions/types";

export const getProfile = () => async dispatch => {
  try {
    dispatch({ type: PROFILE_LOADING });
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
export const getAllProfiles = () => async dispatch => {
  try {
    dispatch({ type: PROFILE_LOADING });
    const response = await fetch("http://localhost:5000/api/profile/all", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      }
    });
    const data = await response;
    if (data.status === 400 || data.status === 404 || data.status === 403) {
      return dispatch({ type: GET_ALL_PROFILES, payload: null });
    }

    const profiles = await data.json();
    dispatch({ type: GET_ALL_PROFILES, payload: profiles });
  } catch (error) {
    console.log("error", error);
    dispatch({ type: GET_PROFILE, payload: {} });
  }
};
export const getProfileUsername = username => async dispatch => {
  try {
    dispatch({ type: PROFILE_LOADING });
    const response = await fetch(
      `http://localhost:5000/api/profile/username/${username}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token")
        }
      }
    );
    const data = await response;
    if (data.status === 400 || data.status === 404 || data.status === 403) {
      return dispatch({ type: GET_PROFILE, payload: null });
    }

    const profile = await data.json();
    dispatch({ type: GET_PROFILE, payload: profile });
  } catch (error) {
    console.log("error", error);
    dispatch({ type: GET_PROFILE, payload: null });
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
    return await data.json();
  } catch (error) {
    console.log(error);
  }
};

export const addExperience = formData => async dispatch => {
  try {
    const response = await fetch(
      "http://localhost:5000/api/profile/experience",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token")
        },
        body: JSON.stringify(formData)
      }
    );
    const data = await response;
    if (data.status === 400 || data.status === 404 || data.status === 403) {
      const error = await data.json();
      return dispatch({ type: ERROR_MESSAGE, payload: error });
    }
    return await data.json();
  } catch (error) {
    console.log(error);
  }
};

export const deleteExperience = exp_id => async dispatch => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/profile/experience/${exp_id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token")
        }
      }
    );
    const data = await response;
    if (data.status === 400 || data.status === 404 || data.status === 403) {
      const error = await data.json();
      return dispatch({ type: ERROR_MESSAGE, payload: error });
    }
    const profile = await data.json();
    dispatch({ type: GET_PROFILE, payload: profile });
  } catch (error) {
    console.log(error);
  }
};

export const addEducation = formData => async dispatch => {
  try {
    const response = await fetch(
      "http://localhost:5000/api/profile/education",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token")
        },
        body: JSON.stringify(formData)
      }
    );
    const data = await response;
    if (data.status === 400 || data.status === 404 || data.status === 403) {
      const error = await data.json();
      return dispatch({ type: ERROR_MESSAGE, payload: error });
    }
    return await data.json();
  } catch (error) {
    console.log(error);
  }
};

export const deleteEducation = edu_id => async dispatch => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/profile/education/${edu_id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token")
        }
      }
    );
    const data = await response;
    if (data.status === 400 || data.status === 404 || data.status === 403) {
      const error = await data.json();
      return dispatch({ type: ERROR_MESSAGE, payload: error });
    }
    const profile = await data.json();
    dispatch({ type: GET_PROFILE, payload: profile });
  } catch (error) {
    console.log(error);
  }
};

export const clearProfile = () => {
  return { type: CLEAR_PROFILE };
};
