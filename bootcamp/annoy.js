//while loop

//var answer=prompt("Are we there yet?");

//while(answer !== "yes" && anwer !=="yeah") {
//	var answer = prompt("Are we there yet?");
//}

//if(answer === "yes") {
	//alert("Yay, We made it!")
//}

//while loop version 2

var answer=prompt("Are we there yet?");

while(answer.indexOf("yes") === -1) {
	var answer = prompt("Are we there yet?");
}

alert("Yay, We made it!");


