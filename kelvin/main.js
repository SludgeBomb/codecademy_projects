const kelvin = 293;
// the temp today in kelvin
console.log(`If the temperature is ${kelvin} in Kelvin.`)
let celsius = (kelvin - 273);
//console.log(celsius);
// for testing celsius
console.log(`The temperature is ${celsius} degrees Celsius.` );
let fahrenheit = (celsius *(9/5) + 32);
//console.log(fahrenheit);
// testing for fahrenheit
fahrenheit = (Math.floor(fahrenheit));
//console.log(fahrenheit);
// testing for rounded fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.` );
let newton = celsius * (33/100);
//console.log(newton);
// testing for newton
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.` );