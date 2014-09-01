$(document).ready(function() {

	var computerNumber1;
	var computerNumber2;
	var userNumber;


	
		computerNumber1 = Math.floor(Math.random() * 101);
		console.log(computerNumber1);

		computerNumber2 = Math.floor(Math.random() * 101);
		console.log(computerNumber2);

		$("#problem1").append(computerNumber1);
		$("#problem2").append(computerNumber2);
		var total = computerNumber1 + computerNumber2;
		console.log(total);

 

	

	$("#userGuess").keypress(function (e) { 
	    if (e.keyCode == 13) { 
	    	userNumber = $("#userGuess").val();
	    	if (userNumber == total) {
	    		$("#message").text("Awesome!");
	    			location.reload();
	   		} else {
	   			$("#message").text("Try Again...");
	   			$("#userGuess").val(""); 
	   		}
	    }


	});



	 



});