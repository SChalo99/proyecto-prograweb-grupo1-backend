import PreArmadoRepository from "../repository/PreArmadoRepository.js";

const getAllArmado = async (req, res) => {
    const result = await PreArmadoRepository.findAll();
    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({ message: 'An error has ocurred.' })
}

const PreArmadoController = { getAllArmado }
export default PreArmadoController