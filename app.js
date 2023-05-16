//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let items = ["Eat", "Code", "Sleep", "Repeat"];
let workItems = [];

//This line tells our app, which is generated using express to use ejs as its vies engine 
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

    let day = date.getDate();
    // this uses the view engine that we set up here to render a particular page.
    res.render("list", {listTitle : day, newListItems : items});

});


app.post("/", function(req, res){


    var item = req.body.todolist-item;
    if( req.body.list === "WorkList") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
    
    
});

app.post("/deleteItem", function(req, res){
    const item = req.body.button;
    if (req.body.list === "WorkList") {
            works.splice(works.indexOf(item), 1);
            res.redirect("/work");
        } else {
            items.splice(items.indexOf(item), 1);
            res.redirect("/");
        }
})
app.get("/work", function(req, res){
    res.render("list", {listTitle: "WorkList", newListItems: workItems});
});

app.get("/about", function(req, res){
    res.render("about");
})
app.listen(3000, function(req, res){
    console.log("Server is running on Port 3000");
}); 