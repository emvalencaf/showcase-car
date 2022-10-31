// modules
const { body } = require('express-validator');

const insertCarValidation = () => {
    return [
        body('name')
            .isString().withMessage('O nome é obrigatório.')
            .isLength({min:3}).withMessage('O nome precisa ter mais de 3 caracteres.'),
        body('brand')
            .isString().withMessage('O nome da marca é obrigatório.')
            .isLength({min:3}).withMessage('O nome da marca precisa ter mais de 3 caracteres.'),
        body('model')
            .isString().withMessage('O modelo do carro é obrigatório.')
            .isLength({min:3}).withMessage('O modelo do carro deve ter mais de 3 caracteres.'),
        body('price')
            .isNumeric().withMessage('O preço do carro deve ser um número.'),
        body('')
    ];
};

module.exports = {
    insertCarValidation
}