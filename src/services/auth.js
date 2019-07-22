import { postAuth } from '../services/api';

export function login(data) {
    console.log("Ušao u auth js")
    console.log(data);
    return postAuth('session',data)
        .then((response) => {
            if(response.session){
                localStorage.setItem('token', response.session.token);
                let str = response.session.user.email;
                localStorage.setItem('username', str.substring(0, str.lastIndexOf('@')));
                
            }else{
                console.log(response);
                alert('Error! Please try again!')
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
            }else{
                alert('Error! Please try again!')
            }
        }).catch(error => console.error('Error:', error));
}

export function logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');

}