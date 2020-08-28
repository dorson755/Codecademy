//This constant is my age
const myAge = 19;

//This variable will change
let earlyYears = 2;

earlyYears *= 10.5;

//Calculating later years
let laterYears = myAge-2;

laterYears *= 4;

//This logs the value of early years and later years
console.log(earlyYears);
console.log(laterYears);

//Calculating my age in Dog years
let myAgeInDogYears = earlyYears + laterYears;

//This makes my name lowercase
let myName = "Larry".toLowerCase();

//Logging my name and age in human years and dog years
console.log (`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)