import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { REDIRECT_FALSE, REMOVE_MESSAGE } from '../../store/types/PostTypes';
import toast, { Toaster } from 'react-hot-toast';

const Dashboard = () => {

    const { redirect, message } = useSelector((state) => state.PostReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        if (redirect) {
            dispatch({
                type: REDIRECT_FALSE
            })
        }
        if (message) {
            toast.success(message);
            dispatch({
                type: REMOVE_MESSAGE
            })
        }
    }, [])
    return (
        <>
            <Helmet>
                <title>Dashboard</title>
                <meta
                    name='description'
                    content='User Dashboard'
                />
                <link rel="shortcut icon" href="./dashboard.png" />
            </Helmet>
            <Toaster
                toastOptions={{
                    style: {
                        fontSize: '15px'
                    },
                }}
            />
            <div>
                <h1>Dashboard Page</h1>
            </div>
        </>
    );
};

export default Dashboard;