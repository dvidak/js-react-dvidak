    
export function get(model) {
    return fetch(`https://flighter-hw5.herokuapp.com/api/${model}`)
      .then((response) => response.json());
}

