const model = require('./model')
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../../config')

module.exports = {
    LOG_IN: async(req, res) => {
        try {
            const { login, password } = req.body
            const accessToken = jwt.sign({ login: login,  password: password }, SECRET_KEY);
            const data = await model.login(login, password)
            if(accessToken){
                res.cookie('token', accessToken)
                res.send(data)
            }
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    },
}