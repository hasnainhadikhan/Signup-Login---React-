import './App.css';
import { Link } from 'react-router-dom';
import React from 'react';
export default function App() {
 
    return (
        <>
     <div>
      
    <h1 className='Mainh1'>404 - Page Not Found</h1>
      <h1> Let's Go to Signup Page </h1>
     <h4>Back to <Link to={'/signup'}>Signup</Link> </h4>
          
        </div>
        </>    
    );
}




