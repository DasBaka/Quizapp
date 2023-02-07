//sounds
let AUDIO_BEEP = new Audio('audio/beep.mp3');
let AUDIO_START = new Audio('audio/start.mp3');
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');
let AUDIO_END = new Audio('audio/end.mp3');

async function playAudio(audio) {
  await wait(250);
  audio.play();
}

//settings
function getRangeValue() {
  let amount = document.getElementById('rangeLabel');
  let val = document.getElementById('questionAmount').value;
  amount.innerHTML = Number(val);
}

//start quiz
function startQuiz() {
  screenChange('', 'btnDiv');
  screenChange('', 'screen');
  screenChange('Get ready...', 'questionText');
  countdownTimer();
}

function countdownTimer() {
  let i = 0;
  var startInterval = setInterval(function () {
    screenChange(countdownTemplate(countdown[i]), 'screen');
    if (i < countdown.length) {
      i++;
      if (i == 4) {
        playAudio(AUDIO_START);
      } else {
        playAudio(AUDIO_BEEP);
      }
    } else {
      clearInterval(startInterval);
      nextQuestion();
      initializeProgressBar();
      screenChange(scoreTemplate, 'footL');
    }
  }, 1000);
}

//check answer
function checkAnswer(id) {
  if (countries[currentQuestion]['country'] == document.getElementById('answer' + id).innerHTML) {
    rightAnswer(id);
    addScore();
  } else {
    wrongAnswer(id);
    addSpeedScore();
  }
  if (timesUp == false) {
    prepareNext();
  }
}

function checkSound(id) {
  if (countries[currentQuestion]['country'] == document.getElementById('answer' + id).innerHTML) {
    playAudio(AUDIO_SUCCESS);
  } else {
    playAudio(AUDIO_FAIL);
  }
}

function rightAnswer(id) {
  let answer = document.getElementById('answer' + id);
  const classes = ['btn-success', 'btn-outline-primary', 'hover'];
  classes.forEach((element) => {
    toggleIfRight(answer, element);
  });
}

function toggleIfRight(answer, element) {
  if (answer.classList.contains(element)) {
    answer.classList.remove(element);
  } else {
    answer.classList.add(element);
  }
}

function wrongAnswer(id) {
  let answer = document.getElementById('answer' + id);
  const classes = ['btn-danger', 'btn-outline-primary', 'hover'];
  classes.forEach((element) => {
    toggleIfWrong(answer, element);
  });
  if (timesUp == false) {
    rightAnswer(countries[currentQuestion]['answers'].indexOf(countries[currentQuestion]['country']));
  }
}

function toggleIfWrong(answer, element) {
  if (answer.classList.contains(element)) {
    answer.classList.remove(element);
  } else {
    answer.classList.add(element);
  }
}

function disableAll() {
  for (let i = 0; i < 4; i++) {
    document.getElementById('answer' + i).disabled = true;
  }
}

//next answer
function nextQuestion() {
  if (currentQuestion == questionAmount) {
    showEndScreen();
    checkHighscore();
  } else {
    screenChange(questionTemplate(countries[currentQuestion]['flag']), 'screen');
    screenChange(answerTemplate(countries[currentQuestion]['answers']), 'btnDiv');
    screenChange('', 'questionText');
    startTimer();
  }
}

async function prepareNext() {
  currentQuestion += 1;
  await wait(2000);
  nextQuestion();
  timesUp = false;
  refreshProgressBar();
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function saveValue() {
  questionAmount = document.getElementById('questionAmount').value;
}
