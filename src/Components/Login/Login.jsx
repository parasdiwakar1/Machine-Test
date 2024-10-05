// Login.js
import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='main'>
            <div className="wrapper">
                <div className="form-wrapper">
                    <form>
                        <h2>Login</h2>
                        <div className="input-group">
                            <input type="text" required />
                            <label>Username</label>
                        </div>
                        <div className="input-group">
                            <input type="password" required />
                            <label>Password</label>
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <div className="sign-link">
                            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
