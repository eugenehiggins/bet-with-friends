export const getGroup = (id) => {
    return fetch(`http://127.0.0.1:8000/api/groups/${id}/`)
        .then((resp) => resp.json())
        .catch((error) => {
            console.log("getGroup error:", error)
        })
}



export const getGroups = () => {
    return fetch(`http://127.0.0.1:8000/api/groups/`)
        .then((resp) => {
            console.log("resp.status:", resp.status)
            if (resp.ok){
                return resp.json();
            }
            throw new Error('something wrong')
        })
        .catch((error) => {
            console.log("getGroups fetch error (backend probably not running):", error)
        })
}

