import React from 'react';
import ReactDOM from 'react-dom';
import { useAsync } from 'react-use';



function getFlights(){
  return fetch('https://flighter-hw7.herokuapp.com/api/flights',{
    headers: {
      'Content-Type': 'application/json',
      'Accept':'application/json',
      'Authorization':'b2wz5UBXRYZ9poLS6bucVyhe'
      //authorization dodat
    },
  })
  .then((res) => res.json())
  .catch((err)=> console.log("nije proslo"));
}



function HelloWorld() {
  const { loading, value, error } = useAsync(getFlights);

  console.log(value);

  return (
    <div>
      <h1>Hello world!</h1>
      { loading &&  <p>Loading</p> }
      <h1>Letovi</h1>
      <table>
      { value && value.flights.map ( (f) => 
            <div>
              <td> {f.id}</td>
              <td> {f.name}</td>
              <td> {f.no_of_seats}</td>
              <td> {f.base_price}</td>
              <td> {f.flys_at}</td>
              <td> {f.lands_at}</td>
              <td> {f.no_of_booked_seats}</td>
              <td> {f.company_id}</td>
              <td> {f.company_name}</td>
              <td> {f.current_price}</td>
            </div>
      )}
      </table>
    </div>
  );
}


ReactDOM.render(<HelloWorld />, document.getElementById('root'));
