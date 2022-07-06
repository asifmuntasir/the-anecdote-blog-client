import axios from "axios";
import {
    CREATE_ERRORS,
    SET_LOADER,
    CLOSE_LOADER

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
            const { data } = await axios.post(`http://localhost:4000/create_post`, postData, config);
            dispatch({
                type: CLOSE_LOADER
            });
            console.log(data);
        } catch (error) {
            const { errors } = error.response.data;
            console.log(errors);
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