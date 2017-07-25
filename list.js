var todos = ["Buy a Turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit") {
	if(input === "list") {
		console.log(todos);
}
	else if (input === "new") {
	//ask for todo
	var newTodo = prompt("Enter new todo");
	//add todo() to array
	todos.push(newTodo);
}


input = prompt("What would you like to do?");
}
console.log("OK, you quit the app");