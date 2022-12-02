import PreArmadoProducto from "../models/preArmadoProducto.js";

const create = async (preArmadoProduct) => {

    try {
        const newPreArmadoProduct = await PreArmadoProducto.create(preArmadoProduct);
            
        return newPreArmadoProduct;

    } catch(error) {
        console.error(error)

        return null;
    }

}

const findAll = async() => {

    try {
        return await PreArmadoProducto.findAll([{ include: Order }, { include: Product }]); //Cambiar como findOrder de OrderProductRepo.
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(id) => {

    try {
        return await PreArmadoProducto.findOne({
            where: {
                id: id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(preArmadoProduct) => {
    try {
        const foundPreArmadoProducto = await PreArmadoProducto.findOne({
            where: {
                id: preArmadoProduct.id
            }
        })

        foundPreArmadoProducto.set(preArmadoProduct);

        await foundPreArmadoProducto.save();

        return foundPreArmadoProducto;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await PreArmadoProducto.destroy({
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

const PreArmadoProductRepository = { create, findAll, findOne, update, remove }

export default PreArmadoProductRepository