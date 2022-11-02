// Components
import FormCar from '../../../components/FormCar.component'

// Hooks
import { useState } from 'react'

const CarEdit = () => {

    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");
    
  return (
    <div className='car-form'>
        <FormCar
            name={name}
            setName={setName}
            brand={brand}
            setBrand={setBrand}
            model={model}
            setModel={setModel}
            price={price}
            setPrice={setPrice}
        />
    </div>
  )
}

export default CarEdit