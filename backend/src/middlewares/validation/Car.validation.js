// modules
const { body } = require('express-validator');

const registerCarValidation = () => {
    return [
        body('name')
            .not()
            .equals('undefined').withMessage('O carro deve ter um nome.')
            .isString().withMessage('O nome do carro é obrigatório.')
            .isLength({min:3}).withMessage('O nome precisa ter mais de 3 caracteres.'),
        body('brand')
            .not()
            .equals('undefined').withMessage('O carro deve ter uma marca.')
            .isString().withMessage('O nome da marca é obrigatório.')
            .isLength({min:3}).withMessage('O nome da marca precisa ter mais de 3 caracteres.'),
        body('model')
            .not()
            .equals('undefined').withMessage('O modelo do carro é obrigatório.')
            .isString().withMessage('O modelo do carro é obrigatório.')
            .isLength({min:3}).withMessage('O modelo do carro deve ter mais de 3 caracteres.'),
        body('price')
            .not()
            .equals('undefined').withMessage('O carro deve ter um preço.')
            .isNumeric().withMessage('O preço do carro deve ser um número.')
            .custom((value, {req}) => {

                if(Number(req.body.price) <= 0) throw new Error("O preço não pode ser menor ou igual a zero");

                return true;
            }),
        body('image')
            .custom((value, {req}) => {

                if(!req.file) throw new Error("A imagem é obrigatória.");

                return true;
            })
    ];
};

module.exports = {
    registerCarValidation
}