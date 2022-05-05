const model = require('./model')

module.exports = {
    ALL_PRODUCTS: async(_, res) => {
        try {
            const product = await model.productall()
            res.send(product)
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    },
    PRODUCT_BY_ID: async(req, res) => {
        try {
            const { id } = req.params
            const productid = await model.productbyid(id)
            res.send(productid)
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    },
    ADD_PRODUCT: async(req, res) => {
        try {
            const { first_img, second_img, third_img, category, name, price, kg, size, garanty, place, description, action, status_active } = req.body
            await model.addproducts( first_img, second_img, third_img,category, name, price, kg, size, garanty, place, description, action, status_active)
            res.send("OK")
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    }
}