import PreArmado from "../models/preArmado.js";


const create = async (preArmado) => {

    try {
        const newPreArmado = await PreArmado.create(preArmado);
            
        return newPreArmado;

    } catch(error) {
        console.error(error)

        return null;
    }

}

const findAll = async() => {

    try {
        return await PreArmado.findAll(); //Los 4 prebuilds
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(id) => {

    try {
        return await PreArmado.findOne({
            where: {
                id: parseInt(id)
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(preArmado) => {
    try {
        const foundPreArmado = await PreArmado.findOne({
            where: {
                id: parseInt(preArmado.id)
            }
        })

        foundPreArmado.set(preArmado);

        await foundPreArmado.save();

        return foundPreArmado;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await PreArmado.destroy({
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

const PreArmadoRepository = { create, findAll, findOne, update, remove }

export default PreArmadoRepository