import React from 'react'

// Hooks
import { useState } from "react"

// Redux

// Uploads
import { uploads } from "../../../utils/config.utils";

// Components
import SubmitButton from "../../../components/SubmitButton.component";

// Styles
import '../../css/Dashboard.css';

const RegisterCar = () => {
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    // Handles
    // Submit
    const handleSubmit = (e) => {

        e.preventDefault();

    };
    // File
    const handleFile = (e) => {

        // image preview
        const file = e.target.files[0];

    }

    return (
        <div className='car-form'>
            <h2>Cadastre carro à venda</h2>
            <p className='subtitle'>
                Preencha as informações requeridas abaixo
            </p>
            {/* preview da imagem */}
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
                    btnValue='Cadastrar Carro'
                />}
            </form>
        </div>
    );
}

export default RegisterCar;