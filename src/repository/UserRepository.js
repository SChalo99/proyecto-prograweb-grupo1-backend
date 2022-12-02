import User from "../models/user.js";
import { Op } from "sequelize";

const create = async (user) => {

    try {
        const userExist = await User.findAll({
            where: {
                email: user.email
            }
        });

        if(!userExist){
            const newUser = await User.create(user);
            return newUser;
        }else {
            return null
        }

    } catch (error) {
        console.error(error)

        return null;
    }

}

const login = async (email, password) => {

    try {
        return await User.findAll({
            where: {
                [Op.and]: [
                    { email: email },
                    { password: password }
                ]
            }
        });
    } catch (error) {
        console.error(error)
        return null
    }

}

const findOne = async (id) => {

    try {
        console.log(await User.findOne({
            where: {
                id: id
            }}))

        return await User.findOne({
            where: {
                id: parseInt(id)
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async (user) => {
    try {
        const foundOrder = await User.findOne({
            where: {
                id: user.id
            }
        })

        foundOrder.set(user);

        await foundOrder.save();

        return foundOrder;

    } catch (error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await Order.destroy({
            where: {
                id: id
            }
        })

        return true;

    } catch (error) {
        console.error(error);
        return false;
    }
}

const UserRepository = { create, login, findOne, update, remove }

export default UserRepository