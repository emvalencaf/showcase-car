// Hooks
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';

// Redux
import {
    getCarById,
    resetMessage,
    updateCar
} from '../../../slices/car.slice';


// Components
import SubmitButton from "../../../components/SubmitButton.component";
import PreviewImage from '../../../components/PreviewsImage.component';


// Styles
import '../../css/Dashboard.css';

const EditCar = () => {

    const { id } = useParams();

    // States
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState("");


    console.log(id);

    const dispatch = useDispatch();

    const { car, loading: loadingCar, error: errorCar } = useSelector((state) => state.car);

    // Loading car details
    useEffect(
        () => {
            dispatch(getCarById(id));
        }, [dispatch, id]);

    
    // Fill car form
    useEffect(
        () => {
            setName(car.name);
            setBrand(car.brand);
            setModel(car.model);
            setPrice(car.price);
            if(car.image) setImage(car.image);
        },[car]
    );

    // Event Handle

    const handleSubmit = async (e) => {

        e.preventDefault();

        const carData = {
            name,
            brand,
            price,
            model,
            image
        }


        console.log(carData);

        // Build formdata
        const formData = new FormData(e.currentTarget);


        await dispatch(updateCar(formData, id));

        setName("");
        setBrand('');
        setModel('');
        setImage('');
        setPrice('');

        setTimeout(() =>{
            dispatch(resetMessage());
        }, 2000);
    };
    // File
    const handleFile = (e) => {

        // image preview
        const file = e.target.files[0];

        setPreviewImage(file);

        // Update image state
        setImage(file);

    }


    return (
        <div className='car-form'>
            {(!loadingCar && car) && (
                <>
                    <h2>Editando as informações de { car.name}</h2>
                    <p className='subtitle'>
                        Preencha as informações requeridas abaixo
                    </p>
                    {/* preview da imagem */}
                    {< PreviewImage
                        image={image}
                        previewImage={previewImage}
                    />}
                    {/* form */}
                    <form
                        onSubmit={handleSubmit}
                    >
                        <label>
                            <span>Nome do carro</span>
                            <input
                                type="text"
                                name='name'
                                value={name}
                                placeholder='nome do carro'
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <label>
                            <span>Marca do carro</span>
                            <input
                                type="text"
                                name='brand'
                                placeholder='marca do carro'
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                            />
                        </label>
                        <label>
                            <span>Modelo do carro</span>
                            <input
                                type="text"
                                name='model'
                                placeholder='modelo do carro'
                                value={model}
                                onChange={(e) => setModel(e.target.value)}
                            />
                        </label>
                        <label>
                            <span>Preço do carro</span>
                            <input
                                type="number"
                                name='price'
                                placeholder='preço do carro em reais'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </label>
                        <label>
                            <span>Imagem do carro</span>
                            <input
                                type="file"
                                name='image'
                                onChange={handleFile}
                            />
                        </label>
                        {<SubmitButton
                            loading={loadingCar}
                            error={errorCar}
                            btnValue='Editar'
                        />}
                    </form>
                </>
            )}
        </div>
    )
}

export default EditCar