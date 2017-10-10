//start with variables for random number to guess and random numbers for each of the 4 gems
//set variables equal to zero for wins, losses, and total 
//set each button on click, add total with random number for button 
//display texts on DOM
//set winning and losing functions, alert win/loss, add win/loss to counter, display on DOM, reset game.
//if equal to random number, win. if else, total is greater than random, lose. 
//set reset game function to reset all random numbers, total is 0, display on DOM.

$(document).ready(function(){

var crystal1 = Math.floor(Math.random() * 12 + 1);
var crystal2 = Math.floor(Math.random() * 12 + 1);
var crystal3 = Math.floor(Math.random() * 12 + 1);
var crystal4 = Math.floor(Math.random() * 12 + 1);
var rNumber = Math.floor(Math.random() * 101 + 19);

$("#random-number").text(rNumber); 

var wins = 0; 
var losses = 0;
var totalScore = 0;

$("#wins").text(wins);
$("#losses").text(losses);

function winning(){
	alert("You won!");
	wins++;
	$("#wins").text(wins);
	resetGame();
}

function losing(){
	alert("You lost!");
	losses++;
	$("#losses").text(losses);
	resetGame();
}

$("#button1").on("click", function() {

	totalScore = totalScore + crystal1;
	$("#total-score-display").text(totalScore);

		if(totalScore === rNumber) {
			winning();
		}

		else if (totalScore > rNumber){
			losing();
		}
})

$("#button2").on("click", function() {

	totalScore = totalScore + crystal2;
	$("#total-score-display").text(totalScore);

		if(totalScore === rNumber) {
			winning();
		}

		else if (totalScore > rNumber){
			losing();
		}
})

$("#button3").on("click", function() {

	totalScore = totalScore + crystal3;
	$("#total-score-display").text(totalScore);

		if(totalScore == rNumber) {
			winning();
		}

		else if (totalScore > rNumber){
			losing();
		}
})

$("#button4").on("click", function() {

	totalScore = totalScore + crystal4;
	$("#total-score-display").text(totalScore);

		if(totalScore == rNumber) {
			winning();
		}

		else if (totalScore > rNumber){
			losing();
		}

	});

function resetGame() {

	rNumber = Math.floor(Math.random() * 101 + 19);

	$("#random-number").text(rNumber);

	crystal1 = Math.floor(Math.random() * 12 + 1);
	crystal2 = Math.floor(Math.random() * 12 + 1);
	crystal3 = Math.floor(Math.random() * 12 + 1);
	crystal4 = Math.floor(Math.random() * 12 + 1);
	totalScore = 0;
	$("#total-score-display").text(totalScore);
	}

});
