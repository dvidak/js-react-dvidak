import { post } from '../services/api';
import { appState } from '../state/AppState';

export function login(session) {
    console.log(session);
    var body = JSON.stringify({session})
    return post('session',body)
        .then((response) => {
            if(response.session){
                let token = response.session.token
                appState.token = token;
                localStorage.setItem('token', response.session.token);
                let str = response.session.user.email;
                localStorage.setItem('username', str.substring(0, str.lastIndexOf("@")));
                
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
    localStorage.removeItem('username');

}