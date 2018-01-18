var squares = document.querySelectorAll(".square");
var reset = document.getElementById("newGame");
var element = document.querySelectorAll(".square");
var indicator = document.querySelector("#text");
var goal = document.querySelectorAll(".goal");
var modes = document.querySelectorAll(".modes");
var gameOver = false;
var answer;
var rgb; //Random rgb color picked 
var rgbElement;


// Game starts
function start(){
for (var i = 0; i < squares.length; i++){
	squares[i].style.background = chooseRandomColor();
}
	answer = pickRandomSquareBG();
	goal[0].textContent = answer.red;
	goal[1].textContent = answer.blue;
	goal[2].textContent = answer.green;
};


for (var i = 0; i < modes.length; i++){
	modes[i].addEventListener("click", function(){
	modes[0].classList.remove("selected");
	modes[1].classList.remove("selected");
	this.classList.add("selected");
	if (this.textContent === "Easy"){
		var numSquares = (squares.length)/2;
	}
	else{
		var numSquares = squares.length;
	}	
})
};

// Reset function
reset.addEventListener("click", function(){
	this.textContent = "New Colors";
	document.querySelector("h1").style.background  = "#232323";
	document.querySelector("h2").style.background  = "#232323";
	gameOver = false;
	indicator.textContent = "";
	start();
});


for (var i = 0; i < element.length; i++){
	element[i].addEventListener("click", function(){
		rgbElement = this.style.background;
		if(rgbElement === rgb){
			indicator.textContent = "You win!";
			document.querySelector("h1").style.background = rgb;
			document.querySelector("h2").style.background = rgb;
			endofGame();
			document.querySelector("#newGame").textContent = "Play Again?"			
		}
		else{
			this.style.backgroundColor = "#343434";
			indicator.textContent = "Try again!";
		}
	})
}

function endofGame(){
	for (var i = 0; i < squares.length; i++){
	squares[i].style.background = rgb;
}};

//Picks Random color
function chooseRandomColor(){
	
	 var red = Math.round(Math.random()* 256);
	 var green = Math.round(Math.random() * 256);
	 var blue = Math.round(Math.random() * 256);
    return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

//Picks random color to be answer
function pickRandomSquareBG(){
	var num = Math.round(Math.random()*(squares.length-1));
	rgb = squares[num].style.background;
	var rgbList = rgb.substring(4, rgb.length-1).split(',');

	// returns background rgb object
	return {
		red: rgbList[0],
		blue: rgbList[1],
		green: rgbList[2]
	};
}
//Main program
start();
