var creatTodo = function(id, content) {
  var todo =  new Todo(id, content);
  return todo;
}

function Todo(id, content) {
  this.id = id;
  this.content = content;
}

module.exports = {
  creatTodo: creatTodo
}
