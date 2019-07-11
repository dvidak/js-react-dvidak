import React from 'react';

export function LoginForm() {
  return (
        <div className="regWrapper">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"/>
        <input
          type="password"
          placeholder="Password"/>
        
        <button className="btn">Login</button>

        <p> Don't have an account?</p>
        <a href="/register"> Register here</a>

        </div>
  )
};
