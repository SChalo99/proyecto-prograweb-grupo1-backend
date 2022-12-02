import express from 'express'
import Reviews from '../models/review.js';
import User from '../models/user.js';

const router = express.Router();

router.get("/",async(req,res)=>{
    const Usuarioid=req.query.user
    if(Usuarioid!=undefined){
        const listadoReview= await Reviews.findAll({
            where:{
                id_user:Usuarioid
            }
        })
        const listadoUser= await User.findAll({
            where:{
                id:Usuarioid
            }
        })

        listadoResena[0]["name"]=listadoUser["name"]

        res.send(listadoReview)
    }else{
        const listadoReview= await Reviews.findAll({
            include: {
                model:User,
                where : {
                    name:"Patrick",
                }
            }
        })
        res.send(listadoReview)
    }
})

export default router