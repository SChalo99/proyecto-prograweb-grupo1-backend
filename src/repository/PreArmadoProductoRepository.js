import PreArmado from "../models/preArmado.js";
import PreArmadoProducto from "../models/preArmadoProducto.js";
import Product from "../models/product.js";

const create = async (preArmadoProduct) => {

    try {
        const newPreArmadoProduct = await PreArmadoProducto.create(preArmadoProduct);
            
        return newPreArmadoProduct;

    } catch(error) {
        console.error(error)

        return null;
    }

}

const findProducto = async (id) => {
    try {
        return await PreArmadoProducto.findAll({
            include: {
                model: Product,
                model: PreArmado
            }, where: {
                preArmado_id: id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
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

const PreArmadoProductRepository = { create, findAll, findOne, update, remove, findProducto }

export default PreArmadoProductRepository