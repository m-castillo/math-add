$(document).ready(function() {

	var computerNumber1;
	var computerNumber2;
	var userNumber;
	var newGame;
	var total;
	var timeOut;
	var count = 0


	$("#count").text("You have answered " + count + " correct!");

	function newGame() {
		newNumbers();
		setTimeout(function() {
				$(".game").fadeOut();
				$(".timeUp").fadeIn();
				$("#count").text("You have answered " + count + " correct!");
				console.log("You have answered " + count + " correct!");
			}, 60000);

	}


	function newNumbers() {
		computerNumber1 = Math.floor(Math.random() * 101);
		console.log(computerNumber1);
		computerNumber2 = Math.floor(Math.random() * 101);
		console.log(computerNumber2);
		$("#problem1").append(computerNumber1);
		$("#problem2").append(computerNumber2);
		total = computerNumber1 + computerNumber2;
		console.log(total);
		$("#userGuess").val(""); 
	}

	
 
	$("#userGuess").keypress(function (e) { 
	    if (e.keyCode == 13) { 
		    	userNumber = $("#userGuess").val();
		    	if (userNumber == total) {
		    			$("#userGuess").val("");
		    			$("#problem1, #problem2").empty();
		    			newNumbers();
		    			count++;
		    			console.log(count);
		   		} else {
		   			$("#message").text("Try Again...");
		   			$("#userGuess").val(""); 
	   			}
	    }
	});


	$("#goBack").click(function() {
		$(".game").fadeOut();
		$(".instructions").fadeIn();

	});

	$("#play").click(function() {
		$(".instructions").fadeOut();
		$(".game").fadeIn();
		newGame();
	});

	$("#yes").click(function() {
		$(".timeUp").fadeOut();
		$(".game").fadeIn();
		$("#problem1, #problem2").empty();
		newGame();
	});

	$("#no").click(function() {
		$(".timeUp").fadeOut();
		$(".instructions").fadeIn();
		$("#problem1, #problem2").empty();
	});


	 



});