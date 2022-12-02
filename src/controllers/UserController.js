import UserRepository from "../repository/UserRepository.js"

const login = async (req, res) => {
    const result = await UserRepository.login(req.params.email, req.params.password)

    return sendResponse(result, res)
}

const findOne = async (req, res) => {
    const result = await UserRepository.findOne(req.params.id)

    return sendResponse(result, res)
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({ message: 'An error has ocurred.' })
}

const UserControler = {login, findOne}

export default UserControler