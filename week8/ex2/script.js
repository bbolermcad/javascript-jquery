/*This function will finish the sentence that started in the the h1 header by replacing the h2 text with either the entered correct answer or letting the user know they were incorrect*/

function schoolHouseRock () {
  var answer = window.prompt("So what is the function of a conjuction?");

  if (answer === "Hooking up words, phrases, and clauses") {
    document.getElementById("answer").innerHTML = "You know your grammar (and your School House Rock song lyrics)"
  }

  else {
    document.getElementById("answer").innerHTML = "Time to go look up some videos on Youtube.  Or google for grammer rules."
  }
};

schoolHouseRock()
