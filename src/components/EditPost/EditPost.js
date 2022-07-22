import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

const EditPost = () => {

    const { id } = useParams();

    const [value, setValue] = useState('');

    const [state, setState] = useState({
        title: '',
        description: ''
    })

    return (
        <>
            <Helmet>
                <title>Edit Post</title>
                <meta
                    name='description'
                    content='Update user psot'
                />
                <link rel="shortcut icon" href="./edit.png" />
            </Helmet>
            <div className="mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="card">
                                <h3 className="card__h3">Edit post</h3>
                                <form>
                                    <div className="group">
                                        <label htmlFor="title">Post title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            id='title'
                                            className='group__control'
                                            placeholder='Post Title'
                                            value={state.value}
                                            onChange={(e) => setState({
                                                ...state, title: e.target.value
                                            })}
                                        />
                                    </div>
                                    <div className="group">
                                        <label htmlFor="body">Post body</label>
                                        <ReactQuill
                                            theme="snow"
                                            id='body'
                                            value={value}
                                            onChange={setValue}
                                            placeholder='Post body...'
                                        />
                                    </div>
                                    <div className="group">
                                        <label htmlFor="description">
                                            Meta Description
                                        </label>
                                        <textarea
                                            name="description"
                                            id="description"
                                            defaultValue={state.description}
                                            onChange={(e) => setState({
                                                ...state, description: e.target.value
                                            })}
                                            cols="30"
                                            rows="10"
                                            className='group__control'
                                            placeholder='meta description...'
                                            maxLength='150'
                                        >
                                        </textarea>
                                        <p className="length">
                                            {
                                                state.description ? state.description.length : 0
                                            }
                                        </p>
                                    </div>
                                    <div className="group">
                                        <input
                                            type="submit"
                                            value="Edit Post"
                                            className='btn btn-default btn-block'
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditPost;