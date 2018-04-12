var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/jqdb";
MongoClient.connect(url,function(err,db){
    if(err)throw err;
    console.log('数据库已创建');
    var jqdb=db.db('jqdb');
    // var mydoc={name:'jq',year:2013}
    // jqdb.collection('user').insertOne(mydoc,function(err,res){
    //     if(err)throw err;
    //     console.log("文档插入成功");
    //     db.close();
    // })
    // var objs=[{name:'jq01',year:2014},{name:'jq02',year:2015},{name:'jq03',year:2016}];
    // jqdb.collection('user').insertMany(objs,function(err,res){
    //     if(err)throw err;
    //     console.log("文档插入数量 "+res.insertedCount);
    //     db.close();
    // })
    var whereStr={'name':'jq'};
    jqdb.collection('user').find(whereStr).toArray(function(err,result){
        if(err)throw err;
        console.log(result);
        db.close();
    })
})