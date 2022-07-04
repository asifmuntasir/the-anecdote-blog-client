import React from 'react';
import { Helmet } from 'react-helmet';
import BgImage from '../BgImage';

const Login = () => {
    return (
        <>
            <Helmet>
                <title>Login</title>
                <meta 
                    name='description'
                    content='User Login Form'
                />
                <link rel="shortcut icon" href="./icons8-blog-48.png"/>
            </Helmet>
            <div className="row mt-80">
                <div className="col-8">
                    <BgImage />
                </div>
                <div className="col-4">
                    <div className="account">
                        <div className="account_-section">
                            <form>
                                <div className="group">
                                    <h2 className="form-heading">Login</h2>
                                </div>
                                <div className="group">
                                    <input
                                        type="email"
                                        name=""
                                        className="group__control"
                                        placeholder="Enter Email" />
                                </div>
                                <div className="group">
                                    <input
                                        type="password"
                                        name=""
                                        className="group__control"
                                        placeholder="Enter Password" />
                                </div>
                                <div className="group">
                                    <input
                                        type="submit"
                                        className="btn btn-default btn-block"
                                        value="Login" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;