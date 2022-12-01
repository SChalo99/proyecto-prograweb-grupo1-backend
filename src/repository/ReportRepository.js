import Report from "../models/report.js";
import User from "../models/user.js";

const create = async (report) => {

    try {
        const newReport = await Report.create(report);
            
        return newReport;

    } catch(error) {
        console.error(error)

        return null;
    }

}

const findAll = async(id) => {

    try {
        return await Report.findAll({
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
        return await Report.findOne({
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

const update = async(report) => {
    try {
        const foundReport = await Report.findOne({
            where: {
                id: report.id
            }
        })

        foundReport.set(report);

        await foundReport.save();

        return foundReport;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await Report.destroy({
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

const ReportRepository = { create, findAll, findOne, update, remove }

export default ReportRepository