import React from 'react';
import BgImage from '../BgImage';

const Login = () => {
    return (
        <>
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