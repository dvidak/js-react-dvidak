import React from 'react';

export function RegisterForm() {
  return (
    <div className="regWrapper">
    <h2>Register</h2>
    <input
      type="text"
      placeholder="Full name"/>
    <input
      type="text"
      placeholder="Username"/>
    <input
      type="password"
      placeholder="Password"/>
    <input
      type="password"
      placeholder="Confirm password"/>

    <button className="btn">Register</button>
    </div>
  );
};
