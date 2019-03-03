import { CREATE_POST, ERROR_MESSAGE } from "./types";

export const createPost = postData => async dispatch => {
    try {
        const response = await fetch("http://localhost:5000/api/post", {
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
        const post = await data.json();
        dispatch({ type: CREATE_POST, payload: post });
    } catch (error) {
        console.log(error);
    }
};
