const { checkSchema } = require('express-validator');

module.exports = {
    editAction: checkSchema({
        token: {
            notEmpty: true
        },
        name: {
            optional: true,
            trim: true,
            isLength: {
                options: { min: 2 }
            },
            errorMessage: 'O nome deve ter pelo menos 2 caracteres.'
        },
        email: {
            optional: true,
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'E-mail inválido.'
        },
        password: {
            optional: true,
            isLength: {
                options: { min: 4 }
            },
            errorMessage: 'A senha deve ter pelo menos 4 caracteres.'
        },
        state: {
            optional: true,
            notEmpty: true,
            errorMessage: 'O estado deve ser enviado.'
        }
    })
};