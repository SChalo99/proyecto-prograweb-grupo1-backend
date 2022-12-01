import formulario from "../models/formulario";


const create = async (formulario) => {

    try {
        const newFormulario = await formulario.create(formulario);
            
        return newFormulario;

    } catch(error) {
        console.error(error)

        return null;
    }

}

const findAll = async() => {

    try {
        return await formulario.findAll([{ include: email }, { include: description }]);
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(id) => {

    try {
        return await formulario.findOne({
            where: {
                id: id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(formulario) => {
    try {
        const foundFormulario = await formulario.findOne({
            where: {
                id: formulario.id
            }
        })

        foundFormulario.set(formulario);

        await foundFormulario.save();

        return foundFormulario;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await formulario.destroy({
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

const FormularioRepository = { create, findAll, findOne, update, remove }

export default FormularioRepository