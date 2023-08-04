const Routes = require('express').Router();

Routes.post("/",(req,res)=>{
   console.log(req.body)
});
Routes.get("/",(req,res)=>{
    res.send("i am good or your ?")



});
Routes.get("/:id",(req,res)=>{
    let id = req.params.id;
    Category.findById({_id : id},(err,result2)=>{
        res,send(result2)
    });
});
Routes.delete("/:id",(req,res)=>{
  let id = req.params.id;
 Category.deleteOne({_id : id},(err)=>{
    res.send({success : true})
 });
});
Routes.put("/:id",(req,res)=>{
    let id = req.params.id;
    Category.updateOne({_id:id},req.body,(err)=>{
        res.send({success : true});
    });
});

 module.exports = Routes;

  



