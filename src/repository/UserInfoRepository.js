import User from "../models/user.js";
import UserInfo from "../models/userInfo.js";

const create = async (userInfo) => {

    try {
        const newUserInfo = await UserInfo.create(userInfo);
            
        return newUserInfo;

    } catch(error) {
        console.error(error)

        return null;
    }

}

const findAll = async(id) => {

    try {
        return await UserInfo.findAll({
            where: {
            user_id: id
          }
        },{ 
            include: User 
        });
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(id) => {

    try {
        return await UserInfo.findOne({
            where: {
                id: id
            }
        },{ 
            include: User 
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(userInfo) => {
    try {
        const foundUserInfo = await UserInfo.findOne({
            where: {
                id: userInfo.id
            }
        })

        foundUserInfo.set(userInfo);

        await foundUserInfo.save();

        return foundUserInfo;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await UserInfo.destroy({
            where: {
                id: id
            }
        })

        return true;

    } catch(error) {
        console.error(error);
        return false;
    }
}

const UserInfoRepository = { create, findAll, findOne, update, remove }

export default UserInfoRepository