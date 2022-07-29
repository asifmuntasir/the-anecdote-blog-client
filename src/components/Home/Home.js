import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { homePosts } from '../../store/asyncMethods/PostMethod';
import Loader from '../Loader';
import moment from 'moment';

const Home = () => {

    let { page } = useParams();
    if (page === undefined) {
        page = 1;
    }

    const { loading } = useSelector(state => state.PostReducer);
    const { posts, count, perPage } = useSelector(state => state.FetchPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(homePosts())
    }, []);

    console.log('Page: ', page);
    console.log('Posts: ', posts);
    console.log('Count: ', count);
    console.log('Perpage: ', perPage);

    return (
        <>
            <Helmet>
                <title>The Anecdote</title>
                <meta
                    name='description'
                    content='MERN Stack Blog'
                />
                <link rel="shortcut icon" href="./home.png" />
            </Helmet>
            <div className="container">
                <div className="row mt-100">
                    <div className="col-8 home">
                        {
                            !loading ? posts.length > 0 ? posts.map(
                                post => (
                                    <div className="row post-style">
                                        <div className="col-8">
                                            <div className="post__card">
                                                <div className="post__card__header">
                                                    <div className="post__card__header__avator">
                                                        {post.userName[0]}
                                                    </div>
                                                    <div className="post__card__header__user">
                                                        <span>{post.userName}</span>
                                                        <span>{moment(post.updatedAt).format("MMM Do YY")}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            image section
                                        </div>
                                    </div>
                                )
                            ) : '' : <Loader />
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;