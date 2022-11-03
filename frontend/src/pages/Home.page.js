// icons
import { FaTrash, FaPen } from 'react-icons/fa';

// Uploads
import { uploads } from '../utils/config.utils';

// Components
import { Link, Navigate } from 'react-router-dom';
// Hooks
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Hooks
import { useAuth } from '../hooks/useAuth.hook';

// Redux
import { deleteCar, getAllCars } from '../slices/car.slice';

//styles
import './css/Home.css';

const Home = () => {

    const { auth } = useAuth();

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

    // Event Handle

    const handleDelete = async (id) => {

        if (loadingCars) return;

        console.log(id);

        await dispatch(deleteCar(id));
        dispatch(getAllCars());
    };

    console.log(cars);


    return (
        <div className='home'>
            <h1>Carros à venda</h1>
            <p className='subtitle'>Veja os carros que temos em nossa loja...</p>
            <div className="display-cars">
                {loadingCars && <p>Carregando os carros em nosso estoque</p>}
                {(!loadingCars && cars.length === 0) && (
                    <>
                        <div className='alert no-store'>

                            <h2>Prezado, cliente,</h2>
                            <p>
                                Infelizmente no momento não temos nenhum carro em nosso estoque
                            </p>
                            <p>
                                Por favor, volte mais tarde.
                            </p>
                            <p>
                                Esperamos poder lhe ajudar a comprar o carro dos seus sonhos
                            </p>
                            <p>
                                Agradecemos a sua preferência!
                            </p>
                        </div>
                    </>
                )}
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
                                <li className='price'>{(car.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</li>
                                <li>

                                    <Link
                                        className='btn'
                                        to={`/${car._id}`}
                                    >Veja mais</Link>
                                </li>
                            </ul>
                            {auth && (
                                <>
                                    <div className="admin">
                                        {!loadingCars && (
                                            <button
                                                onClick={() => handleDelete(car._id)}
                                            ><FaTrash /> deletar carro
                                            </button>
                                        )}
                                        {loadingCars && (<button disabled> <FaTrash /> Aguardar... </button>)}
                                        <Link className='btn' to={`/dashboard/cars/edit/${car._id}`}>
                                            <FaPen /> Editar
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default Home;