const model = require('./model')

module.exports = {
    MAKE_AN_CUSTOM: async(req, res) => {
        try {
            const { date, phone, status_active } = req.body
            await model.makeancustom(date, phone, status_active)
            res.send("OK")
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    },
    ALL_CUSTOMERS: async(_, res) => {
        try {
            const info = await model.allcustoms()
            res.send(info)
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    }
}