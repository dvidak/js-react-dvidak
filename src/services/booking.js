import { post } from '../services/api';


export function booking(booking){
    var body = JSON.stringify({booking})
    console.log(body);
    return post('booking',body)
        .then((response) => {
            if(response.booking){
                alert("Success! Booking id" + response.booking.id)
            }else{
                alert("Error!")
            }
        }).catch(error => console.error('Error:', error));
}