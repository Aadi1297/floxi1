const Routes = require('express').Router();
const Services = require('../Model/ServicesModal');
const multer  = require('multer');
const path = require('path');
const Rsg =require('randomstring');



const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
    return cb(null,path.resolve()+'/assets/images/Services')
    },
    filename:  (req, file, cb)=> {
        let stingName = Rsg.generate({
            length: 70,
            charset: 'alphabetic'
        });
      let oldname =file.originalname.split(".")
        let newNames = stingName+"."+oldname.at(-1);
      req.body.images = newNames
     return cb(null,newNames)
    }
  });
const Upload = multer({ storage });

Routes.post("/", Upload.single('images'), (req,res)=>{
	
	let data = JSON.parse(req.body.form);
 if (data.description){
        Services.create(data,(err)=>{
            res.send({success : true, Status : 200});
        });
}else{ res.send({success : false , Status : 400,RequireData:{
            key : "value",
            description :  "String" ,
            code : "String" ,
            description_in_checkout :  "String" ,
            sale_price : "Number" ,
            purchase_cost : "Number" ,
            unit : "String" ,
            catalog : "String" ,
            vat : "String" ,
            atec_code : "String" ,
            sale_price_with_points :  "Number" ,
            number_of_points : "Number" ,
            calculation_type : "String" ,
            images : "String"
        }})};
});
Routes.get("/",(req,res)=>{
    Services.find({},(err , respound)=>{
    respound.map(m=>m.images="http://localhost:8080/images/Services/"+m.images )
        res.send(respound);
})});

Routes.get("/:id",(req,res)=>{
    let ids = req.params.id;
    Services.findById({_id : ids},(err , respound2)=>{
    res.send(respound2)
})});

Routes.delete("/:id",(req,res)=>{
    let ids = req.params.id
    Services.deleteOne({_id : ids },(err)=>{
        res.send({success : true , status : 201})
    });
});


Routes.put("/:id", Upload.single('images'),(req,res)=>{
    let ids = req.params.id; 
   Services.updateOne({_id : ids},req.body,(err)=>{
      res.send({success : true, status : 201})
   
})});

module.exports = Routes
