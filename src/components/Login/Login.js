import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../hooks/AuthProvider';
const Login = () => {
    const { signInUsigGoogle, error } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const url = location.state?.from || "/home"

    return (
        <div>
            <div className="mx-5">
                <h2>Please Login</h2>
                {error ?
                    <div className="row mb-5  ml-5 text-danger">{error}</div> : ''
                }

                <button onClick={() => signInUsigGoogle(url, history)} type="button" style={{ marginLeft: "10px" }} className="btn btn-primary">Google Sign In</button>
            </div >

        </div >
    );
};

export default Login;