function getSleepHours(day){
  switch (day){
    case 'sunday':
    return 8;
    break;
    case 'monday':
    return 8;
    break;
    case 'tuesday':
    return 8;
    break;
    case 'wednesday':
    return 8;
    break;
    case 'thursday':
    return 8;
    break;
    case 'friday':
    return 8;
    break;
    case 'saturday':
    return 8;
    break;
  }
}

//console.log(getSleepHours('monday'))
const getActualSleepHours = () => getSleepHours('sunday')+getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday');

function getIdealSleepHours(){
  let idealHours = 8;
  return idealHours * 7;
}

//console.log(getIdealSleepHours())
//console.log(getActualSleepHours())

function calculateSleepDebt(){
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  let excessHours = actualSleepHours-idealSleepHours;
  let debtHours = idealSleepHours-actualSleepHours;

  if (actualSleepHours === idealSleepHours){
    console.log('You got the perfect amount of sleep.')
  } else if (actualSleepHours > idealSleepHours){
    console.log('You got more sleep than needed.')
    console.log('You slept in excess of' + excessHours + 'hours.')
  } else if (actualSleepHours < idealSleepHours){
    console.log('You should get some rest.')
    console.log('Your require ' + debtHours + 'hours of rest to make it up.')
  }
}

calculateSleepDebt();