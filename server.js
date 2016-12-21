var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description:'Meet someone for lunch',
	completed: false
},{
	id: 2,
	description:'Go to market',
	completed: false
},{
	id: 3,
	description:'111111111',
	completed: true
}];

app.get('/', function(req, res){
	res.send('Todo API Root');
});
app.get('/todos', function(req, res){
	res.json(todos);
});

app.get('/todos/:id', function(req, res){
	var todoId = parseInt(req.params.id, 10);
	var matchid;
	todos.forEach(function(todo){
		if (todoId === todo.id){
			matchid = todo;
	}
	});
	if(matchid){
		res.json(matchid);
	}else{
		res.status(404).send();
	}

});
app.listen(PORT, function(){
	console.log('Express is listening');
});