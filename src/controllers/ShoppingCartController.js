import OrderProductRepository from "../repository/OrderProductRepository.js"

const productsList = async (req, res) => {
    const result = await OrderProductRepository.findOrder(req.params.order_id)

    return sendResponse(result, res)
}

const deleteItem = async (req, res) => {
    const result = await OrderProductRepository.remove(req.params.id)

    return sendResponse(result, res)
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({ message: 'An error has ocurred.' })
}

const ShoppingCartControler = {productsList, deleteItem}

export default ShoppingCartControler