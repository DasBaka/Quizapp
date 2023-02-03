createFlagsArray();
var currentQuestion = 0;
let questionAmount = '';
var secondsRemaining = 20300;
var countInterval;
var timesUp = false;
let yourScore = 0;

//onload
function createFlagsArray() {
  for (let i = 0; i < countries.length; i++) {
    countries[i]['answers'] = generateAnswers(countries[i]['country']);
  }
  shuffleArray(countries);
  console.log(countries);
}

function generateAnswers(country) {
  let answers = [country];
  for (let i = 1; i < 4; i++) {
    let falseAnswer = countries[randomArrayIndex(countries)]['country'];
    while (answers.includes(falseAnswer)) {
      falseAnswer = countries[randomArrayIndex(countries)]['country'];
    }
    answers.push(falseAnswer);
  }
  shuffleArray(answers);
  return answers;
}

//shuffle and randomize
function randomArrayIndex(array) {
  let index = Math.floor(Math.random() * array.length);
  return index;
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j]; //switches position
    array[j] = temp;
  }
  return array;
}

//timer
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
    for (let i = 0; i < 4; i++) {
      checkAnswer(i);
    }
    prepareNext();
  }
}

function stopTimer() {
  clearInterval(countInterval);
}

//score & progress
function initializeProgressBar() {
  screenChange(progressTemplate, 'progressBar');
}

function refreshProgressBar() {
  let percentage = (currentQuestion / questionAmount) * 100 + '%';
  document.getElementById('progress').style = `width: ${percentage}`;
}

function addScore() {
  let currentScore = document.getElementById('currentScore');
  let score = Number(document.getElementById('timeSec').innerHTML);
  score = Number((score * (110 + Number(questionAmount))).toFixed(0));
  currentScore.innerHTML = Number(currentScore.innerHTML) + score;
  yourScore = currentScore.innerHTML;
}

function addSpeedScore() {
  let currentScore = document.getElementById('currentScore');
  let score = Number(document.getElementById('timeSec').innerHTML);
  score = Number((score * 2.25).toFixed(0));
  currentScore.innerHTML = Number(currentScore.innerHTML) + score;
  yourScore = currentScore.innerHTML;
}

function showEndScreen() {
  screenChange(`<img class="flag-image no-border" src="img/checkered-flag.png"/>`, 'screen');
  screenChange(`<p>You've scored: ${yourScore} points!!`, 'questionText');
  screenChange('', 'footL');
  screenChange('', 'footR');
}
