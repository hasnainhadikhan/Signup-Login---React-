import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Signup() {
    const [email , setEmail] = useState('');
    const [password , setPassward] = useState('');
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
          await  createUserWithEmailAndPassword(auth ,email ,password)
            console.log('Account Created')
        }
        catch(err){
              console.log(err)
        }
    }
  return (
<>
<div className="signup-container">
            <div className="signup-box">
                <h2>Signup</h2>
                <form  onSubmit={handleSubmit}>
                    <div className="input-container">
                        <input type="email" required onChange={ (e) => setEmail(e.target.value)}/>
                        <label>Email</label>
                    </div>
                    <div className="input-container">
                        <input type="password" required  onChange={ (e) => setPassward(e.target.value)} />
                        <label>Password</label>
                    </div>
                    <button type="submit" className="signup-button">Signup</button>
                  <h3>Already's have an Account <Link to="/login">SignUp</Link></h3>
                </form>
            </div>
        </div>

</>
  )
}
