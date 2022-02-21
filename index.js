const Express=require("express");
const model=require("./model/index.js");
const app=Express();
const controller=require("./controller/userController.js");
const routes=require("./routes/index.route.js")
const errors=require("./middleware/errors.middleware.js")
app.use(Express.json());
app.use("/", routes());

app.use(errors.appErrorHandler);
app.use(errors.genericErrorHandler);

app.listen(3000,(err,result)=>{
    if(err){
        console.log("Error",err);
    }else{
        console.log(`Server running at prort ${3000}`);
    }

})