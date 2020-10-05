import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../App';
import Logo from '../../image/logo.png';
import { handleGoogleSignIn, initializeLoginFramework, storeAuthToken } from './LoginManager';

const Login = () => {

    initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
        .then( res => {
            setLoggedInUser(res);
            storeAuthToken()
            history.replace(from);
        })

    }



    return (
        <div className="login-container">
            <div className="container">
                <div className="row">
                    <div className="loginPage-logo">
                        <img src={Logo} style={{width: "150px",height: '50px'}} alt="logo"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 offset-lg-4 login-content">
                        <h4>Login with</h4>
                        <div className="google-login" onClick={googleSignIn}>
                            <FcGoogle className="google-icon"/>
                            <span>Continue with Google</span>
                        </div>
                        <p>Don't have an account? <span>Create an account</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;