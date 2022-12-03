import PerifericosRepository from "../repository/PerifericosRepository.js"

const getallperifericos = async (req, res) => {

    const result = await PerifericosRepository.getallperifericos();
    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({ message: 'An error has ocurred.' })
}

const PerifericController = { getallperifericos }
export default PerifericController