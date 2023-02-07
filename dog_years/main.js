let myAge = 23;
// age to be converted to dog years
let earlyYears = 2;
// how many years a dog ages 10.5 * a human
earlyYears = earlyYears * 10.5;
let laterYears = myAge - 2;
// how many years a dog ages 4 * a human
laterYears = laterYears * 4;
// multiplies the years a dog ages 4 * a human by the remaining years
//console.log(earlyYears);
//console.log(laterYears);
let myAgeInDogYears = earlyYears + laterYears;
// combines them
let myName = 'Francis Bacon';
myName = (myName.toLowerCase());
//takes a myName and makes it printed lowercase
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);