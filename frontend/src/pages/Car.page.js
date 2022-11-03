// Uploads
import { uploads } from "../utils/config.utils";

// Hooks
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getCarById } from "../slices/car.slice";

// Styles
import './css/Car.css';

const Car = () => {

    const { id } = useParams();

    console.log(id);

    const dispatch = useDispatch();

    const { car, loading:loadingCar, error:errorCar } = useSelector((state) => state.car);

    console.log(car);


    // Load car's data
    useEffect(
        () => {
            dispatch(getCarById(id));
        }, [dispatch]);


    return (
        <div id="car">
            {loadingCar && <p> Estamos carregando os dados do carro nesse momento... </p>}
            {(!loadingCar && car._id) && (
                <>
                    <picture>
                        {car.image && (
                            <img src={`${uploads}/images/cars/${car.image}`} alt={`Foto de vitrine de ${car.name}`} />
                        )}
                    </picture>
                    <div className="car-card" key={car._id}>
                        <h1>{car.name}</h1>
                        <p className="subtitle">{car.model}</p>
                        <ul>
                            <li>Marca: {car.brand}</li>
                            <li>Modelo: {car.model}</li>
                            <li className="price">{(car.price).toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}</li>
                        </ul>
                        <button>Comprar</button>
                    </div>
                </>
            )}
            {errorCar && <Navigate to='/notfound' />}
        </div>
    )
}

export default Car;