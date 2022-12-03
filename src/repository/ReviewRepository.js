import Reviews from "../models/review.js";
import User from "../models/user.js";

const create = async (review) => {

    try {
        const newReview = await Reviews.create(review);
            
        return newReview;

    } catch(error) {
        console.error(error)

        return null;
    }

}

const findAll = async() => {

    try {
        return await Reviews.findAll({ 
            include: User 
        });
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(id) => {

    try {
        return await Reviews.findOne({
            where: {
                id: parseInt(id)
            }
        },{ 
            include: User 
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(review) => {
    try {
        const foundReviews = await Reviews.findOne({
            where: {
                id: parseInt(review.id)
            }
        })

        foundReviews.set(review);

        await foundReviews.save();

        return foundReviews;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await Reviews.destroy({
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

const ReviewRepository = { create, findAll, findOne, update, remove }

export default ReviewRepository