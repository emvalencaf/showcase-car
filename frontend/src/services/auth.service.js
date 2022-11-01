// modules
import { api, requestConfig } from '../utils/config.utils';



// Auth Service

    // register an user
const register = async (data) => {

    const config = requestConfig("POST", data);

    try{

        const res = await fetch(api + '/users/register', config)
            .then(res => res.json())
            .catch(err => err);

        if(res){

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

const authService = {
    register,
    logout
};

export default authService;