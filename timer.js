var secondsRemaining = 20300;
var countInterval;
var timesUp = false;

async function startTimer() {
  secondsRemaining = 20300;
  screenChange(timeTemplate, 'footR');
  screenChange(secondsRemaining, 'timeSec');
  await wait(50);
  timerFunction();
}

function timerFunction() {
  countInterval = setInterval(function () {
    secondsRemaining = secondsRemaining - 100;
    var time = secondsRemaining / 1000;
    time = time.toFixed(1);
    document.getElementById('timeSec').innerHTML = time;
    timeQuery(secondsRemaining, countInterval);
  }, 100);
}

function timeQuery(secondsRemaining, countInterval) {
  if (secondsRemaining < 0) {
    document.getElementById('timeSec').innerHTML = (0).toFixed(1);
    clearInterval(countInterval);
    timesUp = true;
    /*for (let i = 0; i < 4; i++) {
      checkAnswer(i);
    }*/
  }
}

function stopTimer() {
  clearInterval(countInterval);
}
