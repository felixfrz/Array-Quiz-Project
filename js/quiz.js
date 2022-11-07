// 1. Create a multidimensional array to hold quiz questions and answers
let questions = [
  ["What year did Nigeria  got independent?", 1960],
  ["How many colors are there in the Nigeria National flag?", 2],
  ["How many fingers do you have?", 10],
  ["How many leg does an insect has?", 6],
  ["Nigeria became a republic in the year?", 1963],
];

// 2. Store the number of questions answered correctly
let correct = [];
let incorrect = [];

let correctAnswer = 0;

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for (let i = 0; i < questions.length; i++) {
  let question = questions[i][0];
  let answer = questions[i][1];
  let userInput = parseInt(prompt(question));
  if (userInput === answer) {
    correctAnswer++;
    correct.push(question);
  } else {
    incorrect.push(question);
  }
}


function createListItems(arr) {
  let items = "";
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}

let html = `<h1>You've got ${correctAnswer} question(s)</h1>
            <h2>You got these questions right:</h2>
            <ol>${createListItems(correct)}</ol>

            <h2>You got these questions wrong:</h2>
            <ol>${createListItems(incorrect)}</ol>
`;
document.querySelector("main").innerHTML = html;

// 4. Display the number of correct answers to the user 1960
