import { post } from '../services/api';

export function login(session) {
    console.log(session);
    var body = JSON.stringify({session})
    return post('session',body)
        .then((response) => {
            if(response.session){
                console.log(response.session)
                console.log(response.session.user.email);
                localStorage.setItem('token', response.session.token);
                localStorage.setItem('username',response.session.user.email);
            }else{
                console.log(response);
                alert('Error! Please try again!')
            }        
        }).catch(error =>{ 
                alert("Error!");
            });
}

export function register(user){
    var body = JSON.stringify({user})
    console.log(body);
    return post('users',body)
        .then((response) => {
            if(response.user){
                alert("Success! Please login in!")
            }else{
                alert("Error! Please try again!")
            }
        console.log(response.user.id);
        }).catch(error => console.error('Error:', error));
}

export function logout(){
    localStorage.removeItem('token');
}