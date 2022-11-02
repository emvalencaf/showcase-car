
// Uploads
import { uploads } from '../utils/config.utils';

// Components

// Hooks
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux
import { getAllCars } from '../slices/car.slice';

//styles
import './css/Home.css';

const Home = () => {

    const dispatch = useDispatch();

    const {
        cars,
        loading: loadingCars,
        error: errorCars
    } = useSelector((state) => state.car);


    // Load cars data
    useEffect(() => {

        dispatch(getAllCars());

    }, [dispatch])

    console.log(cars);

    return (
        <div className='home'>
            <h1>Carros à venda</h1>
            <p className='subtitle'>Veja os carros que temos em nossa loja...</p>
            {loadingCars && <p>Carregando os carros em nosso estoque</p>}
            <div className="display-cars">
                {(!loadingCars && cars) && cars.map(car => (
                    <>
                        <div
                            className="car-card"
                            key={car._id}
                        >
                            {car.image && (
                                <img
                                    src={`${uploads}/images/cars/${car.image}`}
                                    alt={`Foto de exposição do ${car.name}`}
                                />
                            )}

                            <ul>
                                <li className='title'>{car.name}</li>
                                <li>Marca: {car.brand}</li>
                                <li>Modelo: {car.model}</li>
                                <li className='price'>{(car.price).toLocaleString('pt-br',{style:'currency', currency:'BRL'})}</li>
                            </ul>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default Home;