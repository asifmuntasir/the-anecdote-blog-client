import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>The Anecdote</title>
                <meta 
                    name='description'
                    content='MERN Stack Blog'
                />
            </Helmet>
        </>
    );
};

export default Home;