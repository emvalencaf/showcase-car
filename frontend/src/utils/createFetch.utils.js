export const createFetch = async (url, config) =>{

    const handleError = (res) => {

        if(!res.ok) throw Error(res.status + ":" + res.statusText)

        return res
    };

    return fetch(url, config)
        .then(res => handleError(res))
        .then(res => res.json())
        .catch(err => err);

}