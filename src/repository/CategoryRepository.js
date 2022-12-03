import Category from "../models/category.js";

const create = async (category) => {

    try {
        const newCategory = await Category.create(category);
            
        return newCategory;

    } catch(error) {
        console.error(error)

        return null;
    }

}

const findAll = async() => {

    try {
        return await Category.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(id) => {

    try {
        return await Category.findOne({
            where: {
                id: parseInt(id)
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(category) => {
    try {
        const foundCategory = await Category.findOne({
            where: {
                id: parseInt(category.id)
            }
        })

        foundCategory.set(category);

        await foundCategory.save();

        return foundCategory;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await Category.destroy({
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

const CategoryRepository = { create, findAll, findOne, update, remove }

export default CategoryRepository