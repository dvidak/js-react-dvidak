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