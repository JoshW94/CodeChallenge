// Created By Josh Waite
// Code Challenge made for Ace.editor
// 
// Version 1.0.0 earlyBird
// 
// 
var finalAnswer; 
// Our counter running up to the number of items in object.
var questionCounter = 0;
// Our object storing the questions and answers
var questionsHtmlBasics = {
		1 : {
			"question": "In the editor box below, create a header tag &lt;h1> to show ‘Hello’ in the browser box on the right.",
			"answer": "<h1></h1>" 
		},
		2 : {
			"question": "This time use a slightly different header tag <h2> with your name. Good luck!",
			"answer": "<h2></h2>"
		},
		3 : {
			"question": "Now try using a paragraph tag <p> and write a quick sentence about yourself.",
			"answer": "<p></p>"
		},
		4 : {
			"question": "Awesome! Now use all three tags that you’ve used so far. So that’s a <h1> tag, <h2> tag and a <p> tag. ",
			"answer" :"<h1></h1><h2></h2><p></p>"
		},
		5 : {
			"question": "Next let’s try an ordered list <ol> with 5 items <li> inside.",
			"answer" : "<ol><li></li><li></li><li></li><li></li><li></li></ol>"
		},
		6 : {
			"question": "Now let’s try an unordered list <ul> with 5 items <li> inside.",
			"answer" : "<ul><li></li><li></li><li></li><li></li><li></li></ul>"
		},
		7 : {
			"question": "Well done, you’re doing great! Let’s add an image tag <img> with the source (src) being ‘http://www.codezacademy.co.uk/assets/img/logo/logo.png’.",
			"answer": '<imgsrc="">'
		}


	}
$(document).ready(function(){

	
	checkProgress();

	// $("button").click(checkProgress(questions));
});
// var newTitle is for the replacement of the strings in answer
var storeAnswer;
var delayMillis = 5000; //5 seconds
var correctAnswers = 0;
var wrongAnswers= 0;
var clickCount= 1;
var newTitle = "";
var newTitleOl = "<li></li><li></li><li></li><li></li><li></li>";
var newTitleImg = "	&ldquo;&rdquo;"
function skipToNext() {
	questionCounter++;
	$('.questionCounter').text("Q" + questionCounter);
	$('#returnAnswer .questionTitle').text(questionsHtmlBasics[questionCounter].question);
}
function skipToPrevious() {
	questionCounter--;
	$('.questionCounter').text("Q:" + questionCounter);
	$('#returnAnswer .questionTitle').text(questionsHtmlBasics[questionCounter].question);
} 

function printScore(){
	$('.correctAnswers').text("Good Job you got " + correctAnswers + " answers correct and " + wrongAnswers + " Wrong answers" );
}

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}


// Function to check users answer is correct agains answers In Questions Object
function checkProgress(){
	console.log(questionCounter)
	// Innitiates counter for loop throguh objects
	if (questionCounter === 0){
		console.log('start')
		questionCounter++;
		$('.questionCounter').text("Q" + questionCounter);
		// Outputs first question to code-challenge.html
		$('#returnAnswer .questionTitle').html(questionsHtmlBasics[questionCounter].question);
		
		// Counter is above 0 so therefore the loop begins
	} else if(questionCounter > 0){

		console.log(questionsHtmlBasics[questionCounter].question)
		// This is grabbing the users input to question and storing it as a variable called answer
		var answer = $('#returnAnswer h2').text(editor.getValue());
		storeAnswer = answer;
		answer = answer[0].innerText;
		// This replaces spaces with no gap so bunches up string
		answer = answer.replace(/\s/g, '');
		// Now the string is all lowercase
		answer = answer.toLowerCase();
		// These if statements replace everything between the tags with nothing so there string can be what ever as we are only focusing on the syntax.
		if(questionsHtmlBasics[1].question){
			answer = answer.replace(/<h1>[\s\S]*?<\/h1>/, '<h1>' + newTitle + '<\/h1>');
			console.log(answer);
		}
		 if (questionsHtmlBasics[2].question){
			answer = answer.replace(/<h2>[\s\S]*?<\/h2>/, '<h2>' + newTitle + '<\/h2>');
		}
		  if (questionsHtmlBasics[3].question){
		  	answer = answer.replace(/<p>[\s\S]*?<\/p>/, '<p>' + newTitle + '<\/p>');
		  }
		   if (questionsHtmlBasics[4].question){
		   	answer = answer.replace(/<h1>[\s\S]*?<\/h1>/, '<h1>' + newTitle + '<\/h1>', /<h2>[\s\S]*?<\/h2>/, '<h2>' + newTitle + '<\/h2>', /<p>[\s\S]*?<\/p>/, '<p>' + newTitle + '<\/p>')
		   }
		    if (questionsHtmlBasics[5].question){
		   	answer = answer.replace(/<ol>[\s\S]*?<\/ol>/, '<ol>' + newTitleOl + '<\/ol>');
		    } 
		     if (questionsHtmlBasics[6].question){
		   	 answer = answer.replace(/<ul>[\s\S]*?<\/ul>/, '<ul>' + newTitleOl + '<\/ul>');
		     }
              if(questionsHtmlBasics[7].question){
		      answer = answer.replace(/<img src="[\s\S]*?&rdquo;>/, '<imgsrc=' + newTitleImg +'>')
		      console.log(answer);
		      }
		console.log(answer);

		// Here we output a banner if they got it right or wrong
		if (answer == questionsHtmlBasics[questionCounter].answer){
			questionCounter++;
			correctAnswers++;
			// This is for the correct answer
			$('.success').html("<div style='background-color: rgba(65, 168, 32, 0.83); color: white;' class='panel panel-success'><h3 style='margin-left: 20px;'>Well Done Thats correct!</h3></div>");
			$('#returnAnswer .questionTitle').text(questionsHtmlBasics[questionCounter].question);
			$('.questionCounter').text("Q" + questionCounter);
			// also if its correct the editor will be wiped ready for the next question
			setTimeout(function() {
  			editor.getSession().setValue(' ');
        	editor.renderer.updateFull();
			}, delayMillis);
			
			
        	// Here is for the wrong anwer
		} else {
			wrongAnswers++;
			$('.success').html("<div style='background-color: rgba(165, 19, 19, 0.92); color: white;' class='panel panel-danger'><h3 style='margin-left-20px;'>Sorry that is the wrong answer Please try again.</h3></div>")
		}
		if (answer == questionsHtmlBasics[7].answer){
			console.log("working");
			$('.success').html("<div style='background-color: rgba(165, 19, 19, 0.92); color: white;' class='panel panel-danger'><h3 style='margin-left-20px;'>Well Done Code Challenge Completed </h3></div>");
			$('#returnAnswer .questionTitle').text( printScore );
		}
	} 
};
   

// Dean If you want to change the Color background of the Coreect or the Wrong Banners then you need to go to line 78 and 85 within the div style
