// Today's temperature
const kelvin = 293;

//Today's temperature in Celcius
var celcius = kelvin - 273;

//Today's temperature in Farenheit
var fahrenheit = celcius * (9/5) + 32;

//This rounds Fahrenheit down with the math.floor function
fahrenheit = Math.floor(fahrenheit)

//This converts the temperature from celcius to Newton and rounds it down.
var newton = celcius * (33/100);
newton = Math.floor(newton);

//This interpolates the strings
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log(`Today's temrperature is ${newton} degrees Newton.`)