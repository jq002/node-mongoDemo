
var mongoose= require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/jqdb');
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){
    var kittySchema=mongoose.Schema({//以文件形式存储的模型骨架
        name:String
    });
    var kitten=mongoose.model('Kitten',kittySchema);//奕Schema模型生成的，具有抽象的属性和行为（即集合，表）
    var silence=new kitten({name:'Silence'});//entity,类似文档，行


})