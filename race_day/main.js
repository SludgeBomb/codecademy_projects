let raceNumber = Math.floor(Math.random() * 1000);
// variable indicating if the runner registered early or not
let registeredEarly = true;
// age of the runner
let age = 18;
// assigns racer a number based on age and entry time
if (age > 18 && registeredEarly === true) {
  raceNumber += 1000;
}
// logging the racer's time and number based on their age & entry time
if (age > 18 && registeredEarly === true){
  console.log(`You will race at 9:30am, your racer number is ${raceNumber}`);
} else if (age > 18 && registeredEarly === false) {
  console.log(`You will race at 11:00am, your racer number is ${raceNumber}`)
} else if (age < 18) {
  console.log(`You will race at 12:30pm, your racer number is ${raceNumber}`)
} else {
  console.log('Please visit the registration desk for further assistance pertaining to your race time and number.')
}
 //console.log(raceNumber); // testing raceNumber's result