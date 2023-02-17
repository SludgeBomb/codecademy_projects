// prints Hello! or Hello, userName! if one is entered
const userName = '';
if (userName != '') {
  console.log(`Hello, ${userName}!`);
} else {
  console.log('Hello!');
}
// enter your question into the string, no need to add a ?
const userQuestion = 'Should I eat my vegetables';
// prints the user's name if entered, along with the question that they asked above
if (userName != '') {
  console.log(`${userName}, you\'ve asked \"${userQuestion}?\" Let me think...`);
} else {
  console.log(`The question you\'ve asked is \"${userQuestion}?\" let me think...`);
}
// creates a random integer between 0-7 (inclusive) and assigns it to randomNumber
const randomNumber = Math.floor(Math.random() * 8);
// uses the results of randomNumber to generate one of 8 responses to be logged in the console
let eightBall = '';
switch (randomNumber) {
  case 0:
    console.log('It is certain');
  break;
  case 1:
    console.log('It is decidedly so');
  break;
    case 2:
    console.log('Reply hazy try again');
  break;
    case 3:
    console.log('Cannot predict now');
  break;
    case 4:
    console.log('Do not count on it');
  break;
    case 5:
    console.log('My sources say no');
  break;
    case 6:
    console.log('Outlook not so good');
  break;
    case 7:
    console.log('Signs point to yes');
  break;
  // I had already written the code so I made this console.log that will never actually print
  default:
    console.log('your question is meaningless, we all shall perish soon');
}