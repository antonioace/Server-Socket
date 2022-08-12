import { Request,Response,Router } from "express";

 const router=Router();


 router.get('/mensajes',(req:Request,res:Response)=>{

    res.json({
        msg:'Peticion Get'
    })
 })


 router.post('/mensajes',(req:Request,res:Response)=>{

    res.json({
        msg:'Peticion Post'
    })
 })


 export default router