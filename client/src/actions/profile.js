import { GET_PROFILE, GET_PROFILES, CLEAR_PROFILE, LOADING } from '../actions/types';

export const getProfile = () => async dispatch => {
    try {
        dispatch({ type: LOADING });
        const response = await fetch('http://localhost:5000/api/profile', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')

            }
        });
        const data = await response;
        if (data.status === 400 || data.status === 404 || data.status === 403) {
            return dispatch({ type: GET_PROFILE, payload: {} });
        }

        const profile = await data.json();
        console.log('profile', profile);
        dispatch({ type: GET_PROFILE, payload: profile })
    } catch (error) {
        console.log('error', error);
        dispatch({ type: GET_PROFILE, payload: {} });
    }
}