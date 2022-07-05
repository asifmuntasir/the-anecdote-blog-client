import axios from 'axios';
import {
    SET_LOADER,
    CLOSE_LOADER, SET_TOKEN,
    REGISTER_ERRORS
} from '../types/UserTypes';

export const postRegister = (state) => {
    return async (dispatch) => {
        const config = {
            Headers: {
                'Content-Type': 'application/json',
                'trustProtoHeader': true
            }
        }
        dispatch({ type: SET_LOADER });
        try {
            const { data } = await axios.post(`http://localhost:4000/register`, state, config);
            dispatch({
                type: CLOSE_LOADER
            });
            // console.log(data);
            localStorage.setItem('userToken', data.token);
            dispatch({ type: SET_TOKEN, payload: data.token });
        } catch (error) {
            dispatch({
                type: 'CLOSE_LOADER'
            });
            dispatch({
                type: REGISTER_ERRORS,
                payload: error.response.data.errors,
            })
            console.log(error.response)
        }
    }
}