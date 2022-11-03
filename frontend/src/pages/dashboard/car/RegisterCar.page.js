// Hooks
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { publishCar, resetMessage } from '../../../slices/car.slice';

// Components
import SubmitButton from "../../../components/SubmitButton.component";

import PreviewImage from '../../../components/PreviewsImage.component';

// Styles
import '../../css/Dashboard.css';

const RegisterCar = () => {

    const dispatch = useDispatch();

    
    // States
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState("");

    const {
        error,
        loading
    } = useSelector((state) => state.car);
    
    // Handles
    // Submit
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


        await dispatch(publishCar(formData));

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
            <h2>Cadastre carro à venda</h2>
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
                        required
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
                        required
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
                        required
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
                        required
                    />
                </label>
                <label>
                    <span>Imagem do carro</span>
                    <input
                        type="file"
                        name='image'
                        onChange={handleFile}
                        required
                    />
                </label>
                {<SubmitButton
                    loading={loading}
                    error={error}
                    btnValue='Cadastrar Carro'
                />}
            </form>
        </div>
    );
}

export default RegisterCar;