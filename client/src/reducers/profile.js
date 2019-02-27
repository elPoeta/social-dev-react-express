import { GET_PROFILE, GET_PROFILES, CLEAR_PROFILE, LOADING } from '../actions/types';
const initialState = {
    profile: null,
    profiles: null,
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: action.payload,
                loading: false
            };
        case LOADING: return {
            ...state,
            loading: true
        }
        case CLEAR_PROFILE:
            return {
                ...state,
                profile: action.payload
            };
        default: return state;
    }
}