let raceNumber = Math.floor(Math.random() * 1000);
let early = false;
let runnersAge = 0;

if (runnersAge > 18){
  raceNumber += 1000;
}

if (runnersAge > 18 && early === true){
  console.log('Thank you for registering. Your race will begin at 9:30 AM.')
} else if (runnersAge > 18 && early === false){
  console.log('Thank you for registering. Your race will begin at 11:00 AM.')
}

if (runnersAge < 18){
  console.log('Thank you for registering. Your race will begin at 12:30 AM.')
} else if (runnersAge === 18){
  console.log('Please see the registration desk.')
}