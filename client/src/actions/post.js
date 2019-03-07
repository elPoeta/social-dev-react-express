import {
  GET_POSTS,
  GET_POST,
  DELETE_POST,
  POST_LOADING,
  ERROR_MESSAGE
} from "./types";

export const createPost = (postData, history) => async dispatch => {
  try {
    const response = await fetch("/api/posts", {
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
export const updatePost = (postData, history) => async dispatch => {
  try {
    const response = await fetch("/api/posts/update", {
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
    history.push("/myposts");
  } catch (error) {
    console.log(error);
  }
};
export const getPosts = () => async dispatch => {
  try {
    dispatch({ type: POST_LOADING });
    const response = await fetch("/api/posts", {
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
    const response = await fetch(`/api/posts/${id}`, {
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
      `/api/posts/user/${user_id}`,
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
export const getPostByPostIdByUserId = (post_id, user_id, history) => async dispatch => {
  try {
    dispatch({ type: POST_LOADING });
    const response = await fetch(
      `/api/posts/edit/${post_id}/${user_id}`,
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
    } else if (data.status === 401) {
      history.push('/');
    }
    const post = await data.json();

    dispatch({ type: GET_POST, payload: post });
    //return post;
  } catch (error) {
    console.log("error", error);
    dispatch({ type: GET_POST, payload: {} });
  }
};

export const likePost = id => async dispatch => {
  try {

    const response = await fetch(`/api/posts/like/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      }
    });
    const data = await response;
    if (data.status === 400 || data.status === 404 || data.status === 403) {
      const errors = await data.json();
      return dispatch({ type: ERROR_MESSAGE, payload: errors });
    }

    const post = await data.json();


    dispatch({ type: GET_POST, payload: post });

  } catch (error) {
    console.log("error", error);
    dispatch({ type: GET_POST, payload: {} });
  }
};

export const removeLikePost = id => async dispatch => {
  try {
    const response = await fetch(`/api/posts/unlike/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      }
    });
    const data = await response;
    if (data.status === 400 || data.status === 404 || data.status === 403) {
      const errors = await data.json();
      return dispatch({ type: ERROR_MESSAGE, payload: errors });
    }

    const post = await data.json();


    dispatch({ type: GET_POST, payload: post });

  } catch (error) {
    console.log("error", error);
    dispatch({ type: GET_POST, payload: {} });
  }
};

export const createComment = commentData => async dispatch => {
  try {
    //dispatch({ type: POST_LOADING });
    const response = await fetch(`/api/posts/comment/${commentData.id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify(commentData)
    });
    const data = await response;
    if (data.status === 400 || data.status === 404 || data.status === 403) {
      const error = await data.json();
      return dispatch({ type: ERROR_MESSAGE, payload: error });
    }
    const post = await data.json();
    dispatch({ type: GET_POST, payload: post });

  } catch (error) {
    console.log(error);
  }
};

export const deletePost = id => async dispatch => {
  try {
    dispatch({ type: POST_LOADING });
    const response = await fetch(`/api/posts/${id}`, {
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
