import ProductRepository from "../repository/ProductRepository.js";

const getall = async (req, res) => {
    const result = await ProductRepository.findAll(req.params.id);
    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({ message: 'An error has ocurred.' })
}

const ProductController = { getall }
export default ProductController