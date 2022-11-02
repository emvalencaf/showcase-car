// Modules
import { api, requestConfig } from '../utils/config.utils';


// functions
    // Publish an car
const publishCar = async (data, token) => {

    const config = requestConfig("POST", data, token);

    try{

        const res = await fetch(api + '/cars/register', config)
            .then(res => res.json())
            .catch(err => err);

        return res;

    }catch(err){
        console.log(err);
    };

};

    // Get all cars
const getAllCars = async () => {

    const config = requestConfig("GET");

    try{

        const res = await fetch(api + '/cars')
            .then(res => res.json())
            .catch(err => err);

        return res;

    } catch(err){
        console.log(err);
    };


};

// carService
const carService = {
    publishCar,
    getAllCars

};

export default carService;