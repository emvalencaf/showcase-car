// Modules
import { api, requestConfig } from '../utils/config.utils';


// functions
    // Publish an car
const publishCar = async (data, token) => {

    const config = requestConfig("POST", data, token, true);

    try{

        const res = await fetch(api + '/cars/register', config)
            .then(res => res.json())
            .catch(err => err);

        return res;

    }catch(err){
        console.log(err);
    };

};
    // Get car details by a id
const getCarById = async (id) => {

    const config = requestConfig('GET');

    try{

        const res = await fetch(api + '/cars/' + id, config)
            .then(res=> res.json())
            .catch(err => err);

        return res;

    } catch(err){

        console(err);
    
    };

};

    // Get all cars details
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

    // Update car
const updateCar = async (data, id, token) => {

    const config = requestConfig('PUT', data, token, true);

    console.log('requisição dentro do carService: ', config.body);

    try{

        const res = await fetch(api + '/cars/' + id, config)
            .then(res => res.json())
            .catch(err => err);
        
        return res;

    } catch(err){
        console.log(err);
    };

};
    // Delete car
const deleteCar = async (id, token) => {

    const config = requestConfig("DELETE", null, token);

    try {
        
        const res = await fetch(api + '/cars/' + id, config)
            .then(res => res.json())
            .catch(err => err);

        return res;

    } catch (err) {
      
        console.error(err);
        
    };

};

// carService
const carService = {
    publishCar,
    getAllCars,
    getCarById,
    deleteCar,
    updateCar
};

export default carService;