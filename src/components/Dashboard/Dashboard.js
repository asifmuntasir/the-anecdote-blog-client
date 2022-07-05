import React from 'react';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
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
            <div>
                <h1>Dashboard Page</h1>
            </div>
        </>
    );
};

export default Dashboard;