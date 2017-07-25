var secretnumber = 4;
var stringguess = prompt("Guess a number");
var guess = Number(stringguess);

if (guess === secretnumber)
{
alert("You got it right");
}
else if (guess > secretnumber) 
{
	alert("Too high. Guess again");
}
else 
{
	alert("Too low. Guess again");
}