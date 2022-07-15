import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { REDIRECT_FALSE, REMOVE_MESSAGE } from '../../store/types/PostTypes';
import toast, { Toaster } from 'react-hot-toast';
import { fetchPosts } from '../../store/asyncMethods/PostMethod';
import { Link } from 'react-router-dom';

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
                    <div className="row">
                        <div className="col-3">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur repellat esse recusandae alias magni adipisci expedita natus rem, consequatur non, suscipit impedit aliquam ut praesentium ipsa facere at sequi qui sunt voluptatibus ullam temporibus deserunt iste! Vel perferendis similique fugiat.
                        </div>
                        <div className="col-9">
                            {!loading ? posts.length > 0 ? posts.map((post) => (
                                <div className="dashboard__post" key={post._id}>
                                    <div className="dashboard__post__title">
                                        <Link to='/'>{post.title}</Link>
                                    </div>
                                </div>
                            )) : 'You dont have any post' : 'loading...'}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;