const model = require('./model')

module.exports = {
    MAKE_AN_ORDER: async(req, res) => {
        try {
            const { name, phone, product, count, status_active } = req.body
            await model.makeanorder(name, phone, product, count, status_active)
            res.send("OK")
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    },
    ALL_ORDERS: async(_, res) => {
        try {
            const info = await model.allorders()
            res.send(info)
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    }
}