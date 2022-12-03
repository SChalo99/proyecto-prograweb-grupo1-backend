import Order from "../models/order.js";
import User from "../models/user.js";

const create = async (order) => {

    try {
        const newOrder = await Order.create(order);
            
        return newOrder;

    } catch(error) {
        console.error(error)

        return null;
    }

}

const findAll = async(id) => {

    try {
        return await Order.findAll({
            where: {
            user_id: parseInt(id)
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
        return await Order.findOne({
            where: {
                id: parseInt(id)
            }
        }, { 
            include: User 
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(order) => {
    try {
        const foundOrder = await Order.findOne({
            where: {
                id: parseInt(order.id)
            }
        })

        foundOrder.set(order);

        await foundOrder.save();

        return foundOrder;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await Order.destroy({
            where: {
                id: parseInt(id)
            }
        })

        return true;

    } catch(error) {
        console.error(error);
        return false;
    }
}

const OrderRepository = { create, findAll, findOne, update, remove }

export default OrderRepository