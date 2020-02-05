const model=require('../model/admin');
const ObjectId = require('mongoose').Types.ObjectId;

exports.postData=((req,res,next)=>{
    var details=new model({
        name:req.body.name,
        password:req.body.password
    })
    details.save().then(data=>{
        console.log(data,"post data successfully")
        return res.json(data)
    }).catch(err=>{
        console.log(err);
    })
})

exports.getData=((req,res)=>{
    model.find().then(data=>{
        console.log(data)
        return res.json(data)
    }).catch(err=>{
        console.log(err)
    })
})

exports.updateDetails=(req,res)=>{
    let id=req.body.id;
    let name=req.body.name;
    let password=req.body.password;
    model.findById(id).then(empD=>{
        console.log(empD,"UPDATE DATA")
        empD.name=name;
        empD.password=password;
        empD.save();
        res.json(empD)
    }).catch(err=>{
        console.log(err)
    })

}

exports.deleteDetails=((req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send("No records found by this id");

    model.findByIdAndRemove(req.params.id, (err,doc)=>{
        if(!err){
            res.send(doc);
        }else{
             console.log(err)
        }
    })
})

