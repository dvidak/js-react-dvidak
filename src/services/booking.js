import { post } from '../services/api';


export function bookIt(data){
    console.log('data')
    console.log(data);
    return post('bookings',data)
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