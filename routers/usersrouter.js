const express=require('express');
const router=express.Router();
const usersdata=require('../controllers/userscontroller')







router.get('',usersdata.getallposts)
router.post('',usersdata.adduser)
router.delete('/:id',usersdata.deleteuser)
router.put('/:id',usersdata.updateuser)
router.get('/:id',usersdata.getbyid)



module.exports=router