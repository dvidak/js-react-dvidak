import React from 'react';
import ReactDOM from 'react-dom';
import { useAsync } from 'react-use';


function getFlights(){
  return fetch('https://flighter-hw7.herokuapp.com/api/flights',{
    headers: {
      'Content-Type': 'application/json',
      'Accept':'application/json',
    },
    credentials: 'cors',
  })
  .then((res) => res.json())
  .catch((err)=> console.log("nije proslo"));
}

function HelloWorld() {
  const { loading, value, error } = useAsync(getFlights);

  return (
    <div>
      <h1>Hello world!</h1>
      { loading &&  <p>Loading</p>}
      
    </div>
  );
}


ReactDOM.render(<HelloWorld />, document.getElementById('root'));
