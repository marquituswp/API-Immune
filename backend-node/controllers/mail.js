const { sendEmail } = require('../utils/handleEmail')

const { handleHttpError } = require('../utils/handleError')

const { matchedData } = require('express-validator')

// Controlador para enviar correos electrónicos
const send = async (req, res) => {

    try {

        const info = matchedData(req)

        const data = await sendEmail(info)
        
        res.send(data)

    } catch (err) {
        
        handleHttpError(res, 'ERROR_SEND_EMAIL')

    }

}

module.exports = { send }