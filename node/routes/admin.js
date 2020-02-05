const express=require('express');
const router=express.Router();
const adminController=require('../controller/admin')



router.post('/postdata',adminController.postData)

router.get('/getData',adminController.getData)

router.post('/editemployee',adminController.updateDetails)

router.delete('/delete/:id', adminController.deleteDetails)


module.exports=router
