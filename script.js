// MC QUIZ
"use strict"; // Use strict mode

// Add Event Listeners
document.getElementById("mark").addEventListener("click", markQuiz);

// Event Functions
function markQuiz() {
	// Initialize score variable
	let score = 0;

	// Mark Question 1
	let answer = document.querySelector("input[name='q1']:checked").value;
	if (answer === "B") {
		score++;
		document.getElementById("q1Result").innerHTML = "Correct";
		document.getElementById("q1").style.border = "1px solid green";
	} else {
		document.getElementById("q1Result").innerHTML = "Incorrect";
		document.getElementById("q1").style.border = "1px solid red";
	}

	// Mark Question 2
	answer = document.querySelector("input[name='q2']:checked").value;
	if (answer === "A") {
		score++;
		document.getElementById("q2Result").innerHTML = "Correct";
		document.getElementById("q2").style.border = "1px solid green";
	} else {
		document.getElementById("q2Result").innerHTML = "Incorrect";
		document.getElementById("q2").style.border = "1px solid red";
	}

	// Mark Question 3
	answer = document.querySelector("input[name='q3']:checked").value;
	if (answer === "C") {
		score++;
		document.getElementById("q3Result").innerHTML = "Correct";
		document.getElementById("q3").style.border = "1px solid green";
	} else {
		document.getElementById("q3Result").innerHTML = "Incorrect";
		document.getElementById("q3").style.border = "1px solid red";
	}

	// Mark Question 4
	answer = document.querySelector("input[name='q4']:checked").value;
	if (answer === "A") {
		score++;
		document.getElementById("q4Result").innerHTML = "Correct";
		document.getElementById("q4").style.border = "1px solid green";
	} else {
		document.getElementById("q4Result").innerHTML = "Incorrect";
		document.getElementById("q4").style.border = "1px solid red";
	}

	// Mark Question 5
	answer = document.querySelector("input[name='q5']:checked").value;
	if (answer === "D") {
		score++;
		document.getElementById("q5Result").innerHTML = "Correct";
		document.getElementById("q5").style.border = "1px solid green";
	} else {
		document.getElementById("q5Result").innerHTML = "Incorrect";
		document.getElementById("q5").style.border = "1px solid red";
	}
	

	// Output Final Score
	document.getElementById("quizResult").innerHTML = "Your score is " + score + " out of 5.";
}