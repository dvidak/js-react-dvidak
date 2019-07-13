import React, {useState} from 'react';
import { Redirect } from "react-router-dom";


export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [log, setLog] = useState(false)


  const handleSubmit = e => {
    e.preventDefault();
    console.log(email);
    console.log(password);

    fetch("https://flighter-hw7.herokuapp.com/api/session", {
      method: 'POST',
      body: JSON.stringify({
        session : {
          email: email,
          password: password,
        }
      }),
      headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => {
        if(response.session){
          localStorage.setItem("token", response.session.token);
          console.log(localStorage.getItem('token'));
          setLog(true);
        }else{
          alert("Error! Please try again!")
        }        
    }).catch(error => console.error('Error:', error));
  }

  return (
        <form onSubmit = {handleSubmit}>
        { log && <Redirect to="/profile"></Redirect>}

        <div className="regWrapper">
        <h2>Login</h2>
        <input type="text" 
               value= {email}
               onChange={e => setEmail(e.target.value)}
               placeholder="Username" 
               required/>
        <input type="password" 
               value={password}
               placeholder="Password" 
               onChange={e => setPassword(e.target.value)}
               required/>
        <button type="submit" className="btn">Login</button>

        <p> Don't have an account?</p>
        <a href="/register"> Register here</a>
        </div>
        </form>
  )
};
