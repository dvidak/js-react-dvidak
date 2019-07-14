import React from 'react';

export function Header() {
  return (
      <div className="header">
        <div className="buttons">
            <button className="btnAUTH"><a href="/login">Login</a></button>
            <button className="btnAUTH"><a href="/register">Register</a></button>
        </div>
      </div>
  );
};
