import React from 'react';

export function Header() {
  return (
      <div className="header">
        <div className="buttons">
            <button><a href="/login">Login</a></button>
            <button><a href="/register">Register</a></button>
        </div>
      </div>
  );
};
