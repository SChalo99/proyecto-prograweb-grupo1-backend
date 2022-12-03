import Reviews from "../models/review.js";
import Review_Type from "../models/reviewType.js";

const create = async (reviewType) => {

    try {
        const newReviewType = await Review_Type.create(reviewType);
            
        return newReviewType;

    } catch(error) {
        console.error(error)

        return null;
    }

}

const findAll = async(id) => {

    try {
        return await Review_Type.findAll({
            where: {
            review_id: parseInt(id)
          }
        },{ 
            include: Reviews 
        });
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(id) => {

    try {
        return await Review_Type.findOne({
            where: {
                id: parseInt(id)
            }
        },{ 
            include: Reviews 
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(reviewType) => {
    try {
        const foundReviewsType = await Review_Type.findOne({
            where: {
                id: parseInt(reviewType.id)
            }
        })

        foundReviewsType.set(reviewType);

        await foundReviewsType.save();

        return foundReviewsType;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await Review_Type.destroy({
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

const ReviewTypeRepository = { create, findAll, findOne, update, remove }

export default ReviewTypeRepository