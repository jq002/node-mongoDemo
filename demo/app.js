
require("./mongoose-db");
var express=require("express");
var mongoose=require("mongoose");
var Blog=require("./mongoose-db").Blog;
var app=express();

app.use(express.static('./'));
// app.get("/create",)