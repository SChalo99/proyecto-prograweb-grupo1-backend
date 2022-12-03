import PreArmadoProductRepository from "../repository/PreArmadoProductoRepository.js";

const findProducto = async (req, res) => {
    const result = await PreArmadoProductRepository.findProducto();
    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({ message: 'An error has ocurred.' })
}

const PreArmadoProductoController = {findProducto}
export default PreArmadoProductoController