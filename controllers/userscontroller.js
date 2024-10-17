
const users=require('../models/users')


const getallposts= async (req,res)=>{
    let posts=await users.find()
    if(!posts || posts.length<=0){
        res.status(204).json({message:"no data"})
    }
    else{
        res.status(200).json(posts)
    }
}
const adduser=async (req,res)=>{
    let body=req.body;
    const userss=new users({
        name:body.name,
    age:body.age,
    gender:body.gender,
    rollno:body.rollno,
    mobileno:body.mobileno
    })
    try{
        await userss.save();
        res.status(201).json({
            
                name:body['name'],
            age:body['age'],
            gender:body['gender'],
            rollno:body['rollno'],
            mobileno:body['mobileno'],
            
        })
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}
const deleteuser=async (req,res)=>{
    let id=req.params.id;
    try{
        if(id)
        {
            await users.findByIdAndDelete(id)
            res.status(200).json({message:"Deleted successfully"})
        }
        else{
            res.status(404).json({message:"record not found"})
        }
    }
    catch(err){
        res.status(500).json({message:"some internal error"})
    }
}
const updateuser=async(req,res)=>{
    let id=req.params.id
    if(id){
        let body=req.body
        const user=await users.findByIdAndUpdate(id,body,{new:true,runvalidators:true});
         res.status(200).json(user)
        res.status(301).json({message:'no data'})
    }
    else{
        res.status(404).json({message:'no id found'})
    }
}
const getbyid=async (req,res)=>{
    let id=req.params.id
    try{
        const user=await users.findById(id)
        if(user){
            res.status(200).json(user)
        }
        else{
            res.status(301).json({message:'nodata'})
        }
    }catch(err){
        res.status(501).json({message:err.message})
    }
    


}
module.exports={getallposts,adduser,deleteuser,updateuser,getbyid}
