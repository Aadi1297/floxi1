const Routes = require('express').Router();
const path = require('path');
const Rsg = require("randomstring");
const Category = require('../Model/Category');
const multer  = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb)=> {

     return cb(null,path.resolve()+'/assets/images/servicescategory')
    },
    filename:  (req, file, cb)=> {
        let stingName = Rsg.generate({
            length: 70,
            charset: 'alphabetic'
        });
        let oldname = file.originalname.split(".")
        let newNames = stingName+"."+oldname.at(-1);
        req.body.image = newNames
     return cb(null, newNames)
    }
  });
const Upload = multer({ storage });

Routes.post("/",Upload.single('image'), (req,res)=>{
 
 if (req.body.image) {
    Category.create(req.body,(err)=>{
      res.send({success : true, status : 201, })
 })
}else{
res.send({
    success : false,
    status : 400,
    requireData : {
        categoryname : "String",
        image : "String"
    }
})
}


});
Routes.get("/",(req,res)=>{
  Category.find({},(err,result)=>{
    result.map(c => c.image="http://localhost:8080/images/servicescategory/"+c.image)
        res.send(result);
    });
});
Routes.get("/:id",(req,res)=>{
    let id = req.params.id;
    Category.findById({_id : id},(err,result2)=>{
       result2,image = "http://localhost:8080/images/servicescategory/"+result2.image
        res,send(result2);
    });
});
Routes.delete("/:id",(req,res)=>{
  let id = req.params.id;
 Category.deleteOne({_id : id},(err)=>{
    res.send({success : true ,  status : 201});
 });
});
Routes.put("/:id", Upload.single('image'),(req,res)=>{
    let id = req.params.id;
    
  
     Category.updateOne({_id:id},req.body,(err)=>{
        res.send({success : true , status : 201});
    });


});

module.exports = Routes;
  



