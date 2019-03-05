import {
  GET_POSTS,
  GET_POST,
  DELETE_POST,
  POST_LOADING,
  ERROR_MESSAGE
} from "./types";

export const createPost = (postData, history) => async dispatch => {
  try {
    const response = await fetch("http://localhost:5000/api/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify(postData)
    });
    const data = await response;
    if (data.status === 400 || data.status === 404 || data.status === 403) {
      const error = await data.json();
      return dispatch({ type: ERROR_MESSAGE, payload: error });
    }
    await data.json();
    history.push("/feed");
  } catch (error) {
    console.log(error);
  }
};

export const getPosts = () => async dispatch => {
  try {
    dispatch({ type: POST_LOADING });
    const response = await fetch("http://localhost:5000/api/posts", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      }
    });
    const data = await response;
    if (data.status === 400 || data.status === 404 || data.status === 403) {
      return dispatch({ type: GET_POSTS, payload: [] });
    }

    const posts = await data.json();
    dispatch({ type: GET_POSTS, payload: posts });
  } catch (error) {
    console.log("error", error);
    dispatch({ type: GET_POSTS, payload: [] });
  }
};

export const getPost = id => async dispatch => {
  try {
    dispatch({ type: POST_LOADING });
    const response = await fetch(`http://localhost:5000/api/posts/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      }
    });
    const data = await response;
    if (data.status === 400 || data.status === 404 || data.status === 403) {
      return dispatch({ type: GET_POST, payload: {} });
    }

    const post = await data.json();
    dispatch({ type: GET_POST, payload: post });
  } catch (error) {
    console.log("error", error);
    dispatch({ type: GET_POST, payload: {} });
  }
};

export const getPostsByUserId = user_id => async dispatch => {
  try {
    dispatch({ type: POST_LOADING });
    const response = await fetch(
      `http://localhost:5000/api/posts/user/${user_id}`,
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
      return dispatch({ type: GET_POSTS, payload: [] });
    }

    const posts = await data.json();
    dispatch({ type: GET_POSTS, payload: posts });
  } catch (error) {
    console.log("error", error);
    dispatch({ type: GET_POSTS, payload: [] });
  }
};
export const getPostByPostIdByUserId = (post_id, user_id) => async dispatch => {
  try {
    dispatch({ type: POST_LOADING });
    const response = await fetch(
      `http://localhost:5000/api/posts/edit/${post_id}/${user_id}`,
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
      return dispatch({ type: GET_POST, payload: {} });
    }

    const post = await data.json();
    console.log("actiom ", post);
    dispatch({ type: GET_POST, payload: post });
  } catch (error) {
    console.log("error", error);
    dispatch({ type: GET_POST, payload: {} });
  }
};

export const deletePost = id => async dispatch => {
  try {
    dispatch({ type: POST_LOADING });
    const response = await fetch(`http://localhost:5000/api/posts/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      }
    });
    const data = await response;
    if (data.status === 400 || data.status === 404 || data.status === 403) {
      return dispatch({ type: DELETE_POST, payload: -1 });
    }

    const post = await data.json();

    if (post.success) {
      dispatch({ type: DELETE_POST, payload: id });
    }
  } catch (error) {
    console.log("error", error);
    dispatch({ type: DELETE_POST, payload: -1 });
  }
};
