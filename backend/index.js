var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

var Todo = require('./todoList.js');

var urlEncodedParser = bodyParser.urlencoded({ extended: false });
var app = express();

app.use(session({ secret: 'mysecrettoken'}));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  if (!req.session.arrayTodoList) {
    req.session.arrayTodoList = {};
    req.session.arrayTodoList["id"] = Todo.creatTodo("id", "content");
    req.session.arrayTodoList["node"] = Todo.creatTodo("node", "A ne pas oublier");
  }


  next();
});

app.get('/', function (req, res) {
  req.send("Il n'y a rien ici");
});

app.get('/todo', function (req, res) {
  res.json(req.session.arrayTodoList);
});

app.post('/addTodo', urlEncodedParser, function (req, res) {
  if(req.body["id"] != null && req.body["content"] != null && req.body["id"] != "" && req.body["content"] != ""){
    if (! Array.isArray(req.body["id"])) {
      var id = req.body["id"];
      var content = req.body["content"];
    } else {
      var id = req.body["id"][req.body["id"].length-1];
      var content = req.body["content"][req.body["content"].length-1];
    }
    // let id = req.body["id"];
    // let content = req.body["content"];
    if(req.session.arrayTodoList[id] == null)
      req.session.arrayTodoList[id] = Todo.creatTodo(id, content);
    else
      req.session.arrayTodoList[id].content = content;
  }
  res.json({successeful: 'OK'});
});

app.post('/deletTodo', urlEncodedParser, function (req, res) {
  if(req.body["id"] != null){
    let id = req.body["id"];
    if(req.session.arrayTodoList[id] != undefined)
      req.session.arrayTodoList[id] = undefined;
  }
  res.json({successeful: 'OK'});
});

app.get('/deletTodo/:id', function (req, res) {
  var id = req.params.id;
  if(req.session.arrayTodoList[id] != undefined)
    req.session.arrayTodoList[id] = undefined;
  res.json({successeful: 'OK'});
});


app.listen(3000, function () {
  console.log('TODO_List listening on port 3000!');
});
