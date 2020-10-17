const { validationResult, matchedData } = require('express-validator');

module.exports = {
    signin: async (req, res) => {

    },
    signup: async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            res.json({ error: errors.mapped() });
        }

        const data = matchedData(req);

        res.json({ worked: true, data });
    },
};