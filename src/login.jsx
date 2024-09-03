import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');

    const handleSubmit =  (e) => {
        e.preventDefault();
        try {
             signInWithEmailAndPassword(auth,userName, email, password);
             console.log("user => " , userName);
             console.log('Login Successful');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <input 
                            type="text" 
                            required 
                            onChange={(e) => setUserName(e.target.value)} 
                        />
                        <label>UserName</label>
                    </div>
                    <div className="input-container">
                        <input 
                            type="email" 
                            required 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <label>Email</label>
                    </div>
                    <div className="input-container">
                        <input 
                            type="password" 
                            required 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <label>Password</label>
                    </div>
                    <button type="submit" className="login-button">Login</button>
                    <h3>Don't have an account? <Link to='/NotFound'>Login here</Link></h3>
                </form>
            </div>
        </div>
    );
}

  