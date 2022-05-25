export const auth = (credentials) => {
    return fetch('http://127.0.0.1:8000/api/authenticate/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials),
    }).then(response => response.json())
        .catch(e => {
            console.log("error", e)
        })
}