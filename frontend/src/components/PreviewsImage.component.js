// Uploads
import { uploads } from "../utils/config.utils"

// Styles
import './PreviewImage.css';

const PreviewImage = ({ previewImage, image }) => {
    return (
        <picture className="preview-image">
            {(previewImage || image) && (
                <>
                    <img
                        src={
                            previewImage ?
                                URL.createObjectURL(previewImage)
                                : `${uploads}/images/cars/${image}`
                        }
                        alt={`Imagem prévia`}
                    />
                    <figcaption>Imagem inserida no formulário</figcaption>

                </>
            )}
        </picture>
    )
}

export default PreviewImage