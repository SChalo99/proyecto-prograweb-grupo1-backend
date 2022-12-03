import ReviewRepository from '../repository/ReviewRepository.js'


const getall = async (req, res) => {
    const result = await ReviewRepository.findAll();
    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({ message: 'An error has ocurred.' })
}

const ReviewController = { getall }

export default ReviewController