import { postAuth } from '../services/api';

export function login(data) {
    console.log((data));
    return postAuth('session',data)
        .then((response) => {
            if(response.session){
                localStorage.setItem('token', response.session.token);
                localStorage.setItem('id', response.session.user.id);
                let str = response.session.user.email;
                localStorage.setItem('username', str.substring(0, str.lastIndexOf('@')));
                return (response)   
            }else{
                return (response)   
            }        
        }).catch(error =>{ 
                alert('Error!');
            });
}

export function createUser(data){
    return postAuth('users',data)
        .then((response) => {
            if(response.user){
                alert('Success! Please login in!')
                return (response)   
            }else if(response.errors.email){
                alert('Email ' + response.errors.email[0])
                return (response)   
            }else{
                alert('Error! Please try again!')
                return (response)   
            }
        }).catch(error => console.error('Error:', error));
}

export function logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');

}