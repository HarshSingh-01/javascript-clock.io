setInterval(setClock, 100);

const secondHand = document.querySelector('[data-hand-second]');
const minuteHand = document.querySelector('[data-hand-minute]');
const hourHand = document.querySelector('[data-hand-hour]');

function setRotation(element, rotationRatio){
  element.style.setProperty('--rotation', rotationRatio * 360);
  console.log(rotationRatio)
}

function setClock(){
  const current = new Date();
  const secondsRatio = current.getSeconds()/60;
  const minutesRatio = (secondsRatio + current.getMinutes())/60;
  const hoursRatio = (minutesRatio + current.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

setClock();