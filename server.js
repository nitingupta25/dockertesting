var express = require("express");
var app= express();

app.get("/",(req,res)=>{
    res.send(
        "<h1>vijay sales</h1>"+
        "<hr/>"+
        "<h3>smart devices</h3> <br>"
        +"<h3>laptops</h3><br>"
        +"<h3>mobiles</h3><br>"
        +"<h3>smart watches</h3>"
    );
});

app.get("/names",(req,res)=>{
    res.send(
        "<h1>nitin gupta</h1>"
    )
})

var server = app.listen(9000);
console.log("vijaysales online shopping running at port no. 9000");