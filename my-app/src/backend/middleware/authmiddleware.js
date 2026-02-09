import jwt from "jsonwebtoken";


export default function (req,res,next){
    const head=req.headers.authorization;
    if(!head) return res.status(401).json({msg:"No token"});
    const token=head.split(" ")[1];
    if(!token) return res.status(401).json({msg:"Error"})
    try{
        const decode=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decode
        next();

    }catch{
        res.status(401).json({msg:"Error"});
    }
}