import { post } from '../services/api';


export function bookIt(booking){
    console.log(booking)
    var body = JSON.stringify({booking})
    console.log(body);
    return post('bookings',body)
        .then((response) => {
            if(response.booking){
                alert('Success! Booking id' + response.booking.id)
            }else if (response.errors){
                alert('Flight is overbooked!')
            }else{
                alert('Error!')
            }
        }).catch(error => console.error('Error:', error));
}