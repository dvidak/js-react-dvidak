import { post , get } from '../services/api';

export function getUser(id) {
    return get(`users/${id}`)
          .then((response) => response.user)
  }


export function editUser(data){
    console.log(data);
    return post(`users/${data.id}`,data)
        .then((response) => {
            if(response.user){
                alert('Success! User updated!')
            }else{
                alert('Error!')
            }
        }).catch(error => console.error('Error:', error));
}