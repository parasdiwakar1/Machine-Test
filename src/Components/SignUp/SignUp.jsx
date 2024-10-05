// SignUp.js
import React from 'react';
import '../Login/Login.css';

const SignUp = () => {
    return (
        <div className='main'>
            <div className="wrapper">
                <div className="form-wrapper">
                    <form>
                        <h2>Sign Up</h2>
                        <div className="input-group">
                            <input type="text" required />
                            <label>Username</label>
                        </div>
                        <div className="input-group">
                            <input type="email" required />
                            <label>Email</label>
                        </div>
                        <div className="input-group">
                            <input type="password" required />
                            <label>Password</label>
                        </div>
                        <button type="submit" className="btn">Sign Up</button>
                        <div className="sign-link">
                            <p>Already have an account? <a href="/">Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
