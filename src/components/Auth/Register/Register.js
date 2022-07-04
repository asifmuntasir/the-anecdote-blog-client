import { React, useState } from 'react';
import { Helmet } from 'react-helmet';
import BgImage from '../BgImage';
import { useDispatch } from 'react-redux';
import { postRegister } from '../../../store/asyncMethods/AuthMethods';

const Register = () => {

    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
    });

    const dispatch = useDispatch();

    const handleInputs = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const userRegister = async (e) => {
        e.preventDefault();
        console.log(state);
        dispatch(postRegister(state));
    }

    return (
        <>
            <Helmet>
                <title>Register</title>
                <meta
                    name='description'
                    content='User Register Form'
                />
                <link rel="shortcut icon" href="./icons8-blog-48.png" />
            </Helmet>
            <div className="row mt-80">
                <div className="col-8">
                    <BgImage />
                </div>
                <div className="col-4">
                    <div className="account">
                        <div className="account_-section">
                            <form onSubmit={userRegister}>
                                <div className="group">
                                    <h2 className="form-heading">Register</h2>
                                </div>
                                <div className="group">
                                    <input
                                        type="text"
                                        name="name"
                                        className="group__control"
                                        placeholder="Enter Name"
                                        value={state.name}
                                        onChange={handleInputs}
                                    />
                                </div>
                                <div className="group">
                                    <input
                                        type="email"
                                        name="email"
                                        className="group__control"
                                        placeholder="Enter Email"
                                        value={state.email}
                                        onChange={handleInputs}
                                    />
                                </div>
                                <div className="group">
                                    <input
                                        type="password"
                                        name="password"
                                        className="group__control"
                                        placeholder="Create Password"
                                        value={state.password}
                                        onChange={handleInputs}
                                    />
                                </div>
                                <div className="group">
                                    <input
                                        type="submit"
                                        className="btn btn-default btn-block"
                                        value="Register"
                                    />
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