// Components
import SubmitButton from "./SubmitButton.component";


const FormCar = ({
    titleForm,
    subtitleForm,
    name,
    setName,
    brand,
    setBrand,
    price,
    setPrice,
    model,
    setModel,
    image,
    setImage,
    handleSubmit,
    handleFile }) => {
    return (
    <>
        <h2>{titleForm}</h2>
        <p className='subtitle'>
            {subtitleForm}
        </p>
        {/* preview da imagem */ }
    {/* form */ }
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
    
    </>

  )
}

export default FormCar