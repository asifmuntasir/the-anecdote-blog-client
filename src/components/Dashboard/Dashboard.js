import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { REDIRECT_FALSE, REMOVE_MESSAGE } from '../../store/types/PostTypes';
import toast, { Toaster } from 'react-hot-toast';
import { fetchPosts } from '../../store/asyncMethods/PostMethod';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import SideBar from '../SideBar/SideBar';

const Dashboard = () => {

    const { redirect, message, loading } = useSelector((state) => state.PostReducer);
    const { user: { _id } } = useSelector(state => state.AuthReducer);
    const { posts } = useSelector(state => state.FetchPosts)

    console.log('My Posts: ', posts);

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
        dispatch(fetchPosts(_id));
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
                <div className="container mt-100">
                    <div className="row ml-minus-15 mr-minus-15">
                        <div className="col-3 p-15">
                            <SideBar />
                        </div>
                        <div className="col-9 p-15">
                            {!loading ? posts.length > 0 ? posts.map((post) => (
                                <div className="dashboard__post" key={post._id}>
                                    <div className="dashboard__post__title">
                                        <Link to='/'>{post.title}</Link>
                                    </div>
                                    <div className="dashboard__post__links">
                                        <Link to='/'><i class="ri-file-edit-fill icon"></i></Link>
                                        <i class="ri-delete-bin-5-line icon"></i>
                                    </div>
                                </div>
                            )) : 'You dont have any post' : <Loader />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;