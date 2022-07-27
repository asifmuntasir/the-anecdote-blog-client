import React from 'react';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import SideBar from '../SideBar/SideBar';

const UpdateUserName = () => {

    const [userName, setUserName] = useState('');

    const { user: { name } } = useSelector(user => user.AuthReducer);
    // console.log(name);

    useEffect(() => {
        setUserName(name);
    })

    return (
        <>
            <Helmet>
                <title>Update User Name</title>
                <meta
                    name='description'
                    content='Update user name'
                />
                <link rel="shortcut icon" href="./updated.png" />
            </Helmet>
            <div className="container mt-100">
                <div className="row ml-minus-15 mr-minus-15">
                    <div className="col-3 p-15">
                        <SideBar />
                    </div>
                    <div className="col-9 p-15">
                        <div className="card">
                            <h3 className="card__h3">Update Name</h3>
                        </div>
                        <form>
                            <div className="group">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className='group__control'
                                    placeholder='Name...'
                                    onChange={(e) => { setUserName(e.target.value) }}
                                    value={userName}
                                />
                            </div>
                            <div className="group">
                                <input
                                    type="submit"
                                    value="Update Name"
                                    className='btn btn-default btn-block'
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateUserName;