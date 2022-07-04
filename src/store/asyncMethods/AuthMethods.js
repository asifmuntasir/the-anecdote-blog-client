import axios from 'axios';

export const postRegister = (state) => {
    return async (dispatch) => {
        const config = {
            Headers: {
                'Content-Type': 'application/json',
                'trustProtoHeader': true
            }
        }
        dispatch({ type: 'SET_LOADER' });
        try {
            const response = await axios.post(`http://localhost:4000/register`, state, config);
            dispatch({
                type: 'CLOSE_LOADER'
            });
            console.log(response)
        } catch (error) {
            dispatch({
                type: 'CLOSE_LOADER'
            });
            dispatch({
                type: 'REGISTER_ERRORS',
                payload: error.response.data.errors,
            })
            console.log(error.response)
        }
    }
}