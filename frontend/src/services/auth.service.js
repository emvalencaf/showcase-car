// modules
import { api, requestConfig } from '../utils/config.utils';
import { createFetch } from '../utils/createFetch.utils';



// Auth Service

    // register an user
const register = async (data) => {

    const config = requestConfig("POST", data);

    try{

        //const res = await fetch(api + '/users/register', config)
        //    .then(res => res.json())
        //    .catch(err => err);
        const res = await createFetch(
            api + '/users/register',
            config
        );


        if(res._id){

            // Will save users credentials (for authenticate backend's controlled routes) sent by backend
            localStorage.setItem('user', JSON.stringify(res));
            // Another option is the Session Storage
            
        };

        return res;

    }catch(err){
        
        console.log(err);

    };


};

// log out an user
const logout = () => {

    localStorage.removeItem("user");
};

// Sign in an user
const login = async (data) => {

    const config = requestConfig('POST', data);

    try{

        //const res = await fetch(api + '/users/login', config)
        //    .then(res => res.json())
        //    .catch(err => err);
        const res = await createFetch(
            api + '/users/login',
            config
        );

        if(res._id) localStorage.setItem("user", JSON.stringify(res));

        return res;

    } catch(err){

        console.log(err);

    };

};

const authService = {
    register,
    logout,
    login
};

export default authService;