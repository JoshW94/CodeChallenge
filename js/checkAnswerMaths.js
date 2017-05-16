 

 var questionsMathsBasics = {
		1 : {
			"question": "2 x 7 = ?",
			"answer": "14" 
		},
		2 : {
			"question": "8 x 8 = ?",
			"answer": "64"
		},
		3 : {
			"question": "4 x 6?",
			"answer": "24"
		},
		4 : {
			"question": "11 x 3?",
			"answer" :"33"
		},
		5 : {
			"question": "12 x 12 = ?",
			"answer" : "144"
		},
		6 : {
			"question": "7 x 7 = ?",
			"answer" : "49"
		},
		7 : {
			"question": "10 x 3 = ?",
			"answer" : "30"
		},
		8 : {
			"question": "12 x 7 = ?",
			"answer" : "84"
		},
		9 : {
			"question": "9 x 2  = ?",
			"answer" : "18"
		},
		10 : {
			"question": "12 x 4 = ?",
			"answer" : "48"
		},
		11 : {

		}
	}
	$(document).ready(function(){
	
	checkProgress();

});

var questionCounter = 0;
var storeAnswer;
var delayMillis = 4000; //5 seconds
var correctAnswers = 0;
var wrongAnswers= 0;
var clickCount= 1;

	function printScore(){
		$('#questions h4').html('Well done on completing the quiz you got ' + correctAnswers +' correct answers out of a possible 10');

	}

	function checkProgress(){
		console.log(questionCounter)
		// Innitiates counter for loop throguh objects
		if (questionCounter === 0){
			console.log('start')
			questionCounter++;
			$('.questionCounter').text("Question Num:" + questionCounter);
			// Outputs first question to code-challenge.html
			$('#questions h4').html(questionsMathsBasics[questionCounter].question);
		
			// Counter is above 0 so therefore the loop begins
		} else if(questionCounter > 0){

			console.log(questionsMathsBasics[questionCounter].question)
			// This is grabbing the users input to question and storing it as a variable called answer
			var answer = $('#userAnswer').val();
			storeAnswer = answer;
			// This replaces spaces with no gap so bunches up string
			console.log(answer);

		// Here we output a banner if they got it right or wrong
		if (answer == questionsMathsBasics[questionCounter].answer){
			questionCounter++;
			correctAnswers++;
			// This is for the correct answer
			$('.success').html("<div style='background-color: rgba(65, 168, 32, 0.83); color: white;' class='panel panel-success'><h3 style='margin-left: 20px;'>Well Done Thats correct!</h3></div>");
			$('#questions h4').text(questionsMathsBasics[questionCounter].question);
			$('.questionCounter').text("Question Num: " + " " + questionCounter);
			// also if its correct the editor will be wiped ready for the next question
			setTimeout(function() {
  			document.getElementById('userAnswer').value =  "";
        	}, delayMillis);
        	// Here is for the wrong anwer
		} else {
			wrongAnswers++;
			questionCounter++;
			$('#questions h4').text(questionsMathsBasics[questionCounter].question);
			$('.questionCounter').text("Question Num: " + " " + questionCounter);
			$('.success').html("<div style='background-color: rgba(165, 19, 19, 0.92); color: white;' class='panel panel-danger'><h3 style='margin-left-20px;'>Sorry that is the wrong answer Please try again.</h3></div>")
		}
		// if (answer == questionsHtmlBasics[7].answer){
		// 	console.log("working");
		// 	$('.success').html("<div style='background-color: rgba(165, 19, 19, 0.92); color: white;' class='panel panel-danger'><h3 style='margin-left-20px;'>Well Done Code Challenge Completed </h3></div>");
		// 	$('#returnAnswer .questionTitle').text( printScore );
		// }
		} if (questionCounter === 11){
			printScore();
			$('.questionCounter').text(' ');
			$('')
		}
	}