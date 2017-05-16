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
			"question": "Do a h1 tag with Hello to be printed to screen?",
			"answer": "<h1></h1>" 
		},
		2 : {
			"question": "Use a H2 tag with your name now?",
			"answer": "<h2></h2>"
		},
		3 : {
			"question": "Now use a P tag and pass it a quick Sentence?",
			"answer": "<p></p>"
		},
		4 : {
			"question": "Awesome! Now use all three tags you've used so far so that a, H1 tag a H2 tag and finally a P tag are used?",
			"answer" :"<h1></h1><h2></h2><p></p>"
		},
		5 : {
			"question": "Lets try an Ordered List (ol) with 5 List Items(li)?",
			"answer" : "<ol><li></li><li></li><li></li><li></li><li></li></ol>"
		},
		6 : {
			"question": "Lets try an Unordered Lisi (ul) with 5 List Items(li)?",
			"answer" : "<ul><li></li><li></li><li></li><li></li><li></li></ul>"
		},
		7 : {
			"question": "Lets try adding an Image(img) with the source(src) being 'http://www.codezacademy.co.uk/assets/img/logo/logo.png'",
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
var newTitleOl = "<li></li><li></li><li></li><li></li><li></li>" 

function skipToNext() {
	questionCounter++;
	$('.questionCounter').text("Question Num:" + questionCounter);
	$('#returnAnswer .questionTitle').text(questionsHtmlBasics[questionCounter].question);
}
function skipToPrevious() {
	questionCounter--;
	$('.questionCounter').text("Question Num:" + questionCounter);
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
		      if (questionsHtmlBasics[7].question){
		   	  answer = answer.replace(/<ul>[\s\S]*?<\/ul>/, '<ul>' + newTitleOl + '<\/ul>');
		      }
		       // if(questionsHtmlBasics[8].question){
		       //  	answer = answer.replace(/<img>)
		       //  }
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
