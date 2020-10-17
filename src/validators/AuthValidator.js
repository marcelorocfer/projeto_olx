const { checkSchema } = require('express-validator');

module.exports = {
    signup: checkSchema({
        name: {
            trim: true,
            isLength: {
                options: { min: 2 }
            },
            errorMessage: 'O nome deve ter pelo menos 2 caracteres.'
        },
        email: {
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'E-mail inválido.'
        },
        password: {
            isLength: {
                options: { min: 4 }
            },
            errorMessage: 'A senha deve ter pelo menos 4 caracteres.'
        },
        state: {
            notEmpty: true,
            errorMessage: 'O estado deve ser enviado.'
        }
    })
};