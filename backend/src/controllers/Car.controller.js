// Repository
const repository = require('../repository/Car.repository');

// Controller

const registerCar = async (req, res) => {

    // Req data
    const { name, brand, model, price } = req.body;

    console.log(req.file);

    const image = req.file.filename;

    // create new car
    const newCar = await repository.registerCar({
        name,
        brand,
        model,
        price,
        image
    });

    res.status(201).json({
        newCar
    });

};

const updateCar = async (req, res) => {

    const { id } = req.params;

    // New data
    const { name, brand, model, price } = req.body;

    const car = await repository.findById(id);

    if(!car) return res.status(404).json({errors:['Carro não encontrado.']});

    const newData = {
        name,
        brand,
        model,
        price
    }

    if(req.file) newData.image = req.file.filename

    await repository.updateCar(car, newData);

    res.status(200).json({car, message:"Carro atualizado com sucesso."});
};

// get all cars
const getAllCars = async (req, res) => {

    const cars = await repository.getAllCars();

    if(!cars) res.status(404).json({errors:"Não foi possível encontrar nenhum carro."});

    res.status(200).json(cars);
};


// get car by id
const getCarById = async (req, res) => {

    const { id } = req.params;

    const car = await repository.findById(id);

    // Check if car exists
    if(!car) return res.status(404).json({errors:["Carro não existe"]});

    return res.status(200).json(car);
};



// Delete car by id
const deleteCarById = async (req, res) => {

    const { id } = req.params;

    try{

        const deleteCar = await repository.deleteCarById(id);
    
        return res.status(200).json({id: deleteCar._id, message:"Carro excluído com sucesso."});

    } catch(err){
        res.status(404).json({errors:'"Carro não encontrado.'});
    };

};

module.exports = {
    registerCar,
    updateCar,
    getAllCars,
    getCarById,
    deleteCarById
};