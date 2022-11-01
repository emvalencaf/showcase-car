// API's url
export const api = 'http://localhost:5000/api';// insert here the API's url
export const uploads = 'http://localhost:5000/uploads';// url for our local image storage


// Configs for HTTP request
export const requestConfig = (method, data, token = null, image = null) => {

    let config

    if(image){

        config = {
            method,
            body: data,
            headers:{}
        };
    } else if(method === 'DELETE'){
        

        config = {
            method,
            headers:{}
        };

    } else{

        config = {
            method,
            body: JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        };
    };

    if(token) config.headers.Authorization = `Bearer ${token}`;

    return config;

};