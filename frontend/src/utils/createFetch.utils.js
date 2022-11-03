export const createFetch = async (url, config) =>{

    return fetch(url, config)
        .then(res => res.json())
        .catch(err => err);

}