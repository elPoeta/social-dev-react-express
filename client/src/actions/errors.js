import { CLEAR_ERROR_MESSAGE } from './types';

export const clearErrorMessage = () => dispatch => dispatch({ type: CLEAR_ERROR_MESSAGE, payload: {} });