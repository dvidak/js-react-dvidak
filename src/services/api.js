    
export function get(model) {
    return fetch(`https://flighter-hw7.herokuapp.com/api/${model}`,{
        method: 'GET',
        headers :{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    })
    .then((response) => response.json());
}

export function post(model, body){
    return fetch(`https://flighter-hw7.herokuapp.com/api/${model}`,{
        method: 'POST',
        body: JSON.stringify(body),
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    }).then(res => res.json());
}


export function postAuth(model, body){
    return fetch(`https://flighter-hw7.herokuapp.com/api/${model}`,{
        method: 'POST',
        body: JSON.stringify(body),
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
}

export function put(model, body){
    return fetch(`https://flighter-hw7.herokuapp.com/api/${model}`,{
        method: 'PUT',
        body: JSON.stringify(body),
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    }).then(res => res.json());
}


export function uploadPhoto(file) {
    const body = new FormData();
    body.append('image', file);
    return fetch('https://isa-js-upload.andreicek.dev/upload', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: body,
    }).then(response => response.json())
    .then( data => { return data});
  }