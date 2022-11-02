// Hooks
import { useState } from "react"

// Redux

// Uploads
import { uploads } from "../../utils/config.utils";

// Components
import SubmitButton from "../../components/SubmitButton.component";

// Styles

const CarRegister = () => {

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
        <div id='car-register'>
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
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    <span>Marca do carro</span>
                    <input
                        type="text"
                        name='brand'
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    />
                </label>
                <label>
                    <span>Modelo do carro</span>
                    <input
                        type="text"
                        name='model'
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                    />
                </label>
                <label>
                    <span>Preço do carro</span>
                    <input
                        type="number"
                        name='price'
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
                    
                />}
            </form>
        </div>
    )
}

export default CarRegister