import axios from "axios";
import {
    CREATE_ERRORS,
    REMOVE_ERRORS,
    SET_LOADER,
    CLOSE_LOADER,
    REDIRECT_TRUE,
    REDIRECT_FALSE,
    SET_MESSAGE,
    REMOVE_MESSAGE,
    SET_POSTS,
    SET_POST,
    POST_REQUEST,
    POST_RESET
} from '../types/PostTypes';

// const token = localStorage.getItem('userToken');

export const createAction = (postData) => {
    return async (dispatch, getState) => {
        const { AuthReducer: { token } } = getState();
        // console.log('Your State: ', token);

        dispatch({
            type: SET_LOADER
        });
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
            const { data: { msg } } = await axios.post(`http://localhost:4000/create_post`, postData, config);
            dispatch({
                type: CLOSE_LOADER
            });
            // console.log(data);
            dispatch({
                type: REMOVE_ERRORS
            })
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

export const fetchPosts = (id, page) => {
    return async (dispatch, getState) => {
        const { AuthReducer: { token } } = getState();

        dispatch({
            type: SET_LOADER
        });

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
            const {
                data: { response, count, perPage }
            } = await axios.get(`http://localhost:4000/posts/${id}/${page}`, config);

            dispatch({
                type: CLOSE_LOADER
            });
            // console.log(response);
            dispatch({
                type: SET_POSTS,
                payload: { response, count, perPage }
            })
        } catch (error) {
            dispatch({
                type: CLOSE_LOADER
            })
        }
    }
}

export const fetchPost = (id) => {
    return async (dispatch, getState) => {
        const {
            AuthReducer: { token },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
        dispatch({
            type: SET_LOADER
        });

        try {
            const { data: { post } } = await axios.get(`http://localhost:4000/post/${id}`, config);
            dispatch({
                type: CLOSE_LOADER
            });
            dispatch({
                type: SET_POST,
                payload: post
            });
            dispatch({
                type: POST_REQUEST
            });
        } catch (error) {
            dispatch({
                type: CLOSE_LOADER
            });
            console.log(error.message)
        }
    }
}