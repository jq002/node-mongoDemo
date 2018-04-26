
const mongoose=require("mongoose");
mongoose.set('debug',true);
const url="mongodb://localhost:27017/jqdb";
const db=mongoose.connect(url);

db.connection.on('error',function(error){
    console.log("数据库连接失败："+error)
});

db.connection.on('open',function(){
    console.log("数据库连接成功")
})