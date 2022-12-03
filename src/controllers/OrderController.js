import OrderRepository from '../repository/OrderRepository.js'

const create = async (req, res) => {
    const result = await OrderRepository.create(req.body)

    return sendResponse(result, res)
}


const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({ message: 'An error has ocurred.' })
}



const OrderControler = {create}

export default OrderControler