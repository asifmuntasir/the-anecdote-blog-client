import React from 'react';
import { Helmet } from 'react-helmet';
import BgImage from '../BgImage';

const Register = () => {
    return (
        <>
             <Helmet>
                <title>Register</title>
                <meta 
                    name='description'
                    content='User Register Form'
                />
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
                                    <h2 className="form-heading">Register</h2>
                                </div>
                                <div className="group">
                                    <input
                                        type="text"
                                        name=""
                                        className="group__control"
                                        placeholder="Enter Name" />
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
                                        placeholder="Create Password" />
                                </div>
                                <div className="group">
                                    <input
                                        type="submit"
                                        className="btn btn-default btn-block"
                                        value="Register" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;