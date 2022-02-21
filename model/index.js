const {Sequelize,DataTypes}=require("sequelize");
const sequelize=new Sequelize("admin","root","password",{
    host:"localhost",
    dialect:"mysql"
});

sequelize.authenticate().then(()=>{
    console.log("database connceted");
}).catch((err)=>{
    console.log("Error in connecting datbase",err);
})


const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.users=require("./users")(sequelize,DataTypes);
db.sequelize.sync().then(()=>{
    console.log("datbase re-syn")
}).catch((err)=>{
    console.log("error",err)
})
module.exports=db;