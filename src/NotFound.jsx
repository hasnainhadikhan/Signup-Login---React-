
import React from 'react'
import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <div>

    <div className="loading-container">
            <div className="spinner"></div>
            <h2>Loading...</h2>
    <h4>Back to <Link to={'/signup'}>Signup</Link> </h4>
    </div>
</div>
  )
}
