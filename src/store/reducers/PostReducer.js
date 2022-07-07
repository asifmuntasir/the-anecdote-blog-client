import {
    CREATE_ERRORS,
    SET_LOADER,
    CLOSE_LOADER,
    REDIRECT_TRUE
} from '../types/PostTypes.js';

const initState = {
    loading: false,
    createErrors: [],
    redirect: false,
    massage: ''
};


const PostReducer = (state = initState, action) => {
    const { type, payload } = action;
    if (type === SET_LOADER) {
        return { ...state, loading: true }
    } else if (type === CLOSE_LOADER) {
        return { ...state, loading: false }
    } else if (type === CREATE_ERRORS) {
        return { ...state, createErrors: payload }
    } else if (type === REDIRECT_TRUE) {
        return { ...state, redirect: true }
    } else {
        return state;
    }
}

export default PostReducer;