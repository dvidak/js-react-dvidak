    
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
        body: body,
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    }).then(res => res.json());
}


export function postAuth(model, body){
    console.log(model);
    console.log("Body")
    console.log(body);
    return fetch(`https://flighter-hw7.herokuapp.com/api/${model}`,{
        method: 'POST',
        body: JSON.stringify(body),
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
}

