import OrderProductRepository from "../repository/OrderProductRepository.js";

const create = async (req, res) => {
    const result = await OrderProductRepository.create(req.body)

    return sendResponse(result, res)
}

const findProduct = async (req, res) => {
    const result = await OrderProductRepository.findProducts(req.params.id)

    return sendResponse(result, res)
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({ message: 'An error has ocurred.' })
}



const OrderProductControler = {create, findProduct}

export default OrderProductControler