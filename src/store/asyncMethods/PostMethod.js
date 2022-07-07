import axios from "axios";
import {
    CREATE_ERRORS,
    SET_LOADER,
    CLOSE_LOADER,
    REDIRECT_TRUE,
    REDIRECT_FALSE,
    SET_MESSAGE,
    REMOVE_MESSAGE
} from '../types/PostTypes';

const token = localStorage.getItem('userToken');

export const createAction = (postData) => {
    return async (dispatch) => {
        dispatch({
            type: SET_LOADER
        });
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
            const { data, msg } = await axios.post(`http://localhost:4000/create_post`, postData, config);
            dispatch({
                type: CLOSE_LOADER
            });
            console.log(data);
            dispatch({
                type: REDIRECT_TRUE
            });
            dispatch({
                type: SET_MESSAGE,
                payload: msg
            })
        } catch (error) {
            console.log(error.response);
            const { errors } = error.response.data;
            dispatch({
                type: CLOSE_LOADER
            });
            // console.log(error.message);
            dispatch({
                type: CREATE_ERRORS,
                payload: errors
            });
        }
    }
}