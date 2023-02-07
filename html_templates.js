//predefined highscore
var highscore = [
  { name: 'AAAAA', score: 25000 },
  { name: 'BBBBB', score: 5000 },
  { name: 'CCCCC', score: 15000 },
];
loadContent();
sortHighscore();

//templates
let startTemp = /*html*/ `
<button type="button" class="btn hover contentWidth px-5 py-3 mx-2 my-2 btn-outline-primary" onclick="startQuiz(), saveValue()">Start</button>
<fieldset class="contentWidth d-flex flex-row justify-content-evenly align-items-baseline">
   <p class="px-3">Questions:</p><input class="w-50 mt-3" type="range" name="questionAmount" value="15" onload="getRangeValue()" oninput="getRangeValue()" id="questionAmount" step="1" min="1" max="30"><label class="px-3" for="questionAmount" id="rangeLabel">15</label>
</fieldset> `;

const countdown = ['3', '2', '1', '&#9872;'];

function countdownTemplate(item) {
  return /*html*/ `
 <p class="fontSize50">${item}</p>`;
}

function answerTemplate(x) {
  let answers = '';
  for (let i = 0; i < 4; i++) {
    answers += /*html*/ `<button type="button" class="btn hover contentWidth px-5 py-3 mx-2 my-2 btn-outline-primary" onclick="checkSound(${i}), checkAnswer(${i}), disableAll(), stopTimer(), refreshProgressBar();" id="answer${i}" >${x[i]}</button>`;
  }
  return answers;
}

function questionTemplate(x) {
  return /*html*/ `<img class="flag-image" src="flags/${x}" />`;
}

let timeTemplate = /*html*/ `
    <div id="footR1">Remaining Time:</div>
    <div id="timeSec"></div>
    <div id="footR2">sec</div>`;

let progressTemplate = /*html*/ `
    <div class="progress" role="progressbar">
       <div class="progress-bar progress-bar-striped bg-info" style="width: 0%" id="progress"></div>
    </div>`;

let scoreTemplate = /*html*/ `
    <div id="footL1">Score: </div>
    <div id="currentScore">0</div>
`;

let newScoreTemplate = /*html*/ `
<h3>You've got a new highscore!</h3>
<h3>Enter your name: <input type="text" class="enterName" maxlength="5" id="nameId" onkeyup="this.value = this.value.toUpperCase();"><button type="button" class="btn continueBtn hovers mx-2 my-2 btn-outline-primary" onclick="pushScore(), sortHighscore(), showHighscore(), screenChange('', 'progressBar')"> > </button></h3>
 `; //on mobile: 'predictive text' ignores maxlength. workaround with 'type=passwort' and 'oninput = changeToTextType'...

let looseTemplate = /*html*/ `
<button type="button" class="btn continueBtn hovers mx-2 my-2 btn-outline-primary" onclick="showHighscore(), sortHighscore(), screenChange('', 'progressBar')"> > </button></h3>
`;

let continueBtn = /*html*/ `<button type="button" class="btn hover px-5 py-3 mx-2 my-2 btn-outline-primary" onclick="getBackToStart()"> Back </button></h3>`;

let mainFlag = /*html*/ `<img class="flag-image no-border" src="img/favicon.ico" onmouseenter="screenChange(highscoreTemplate(), 'screen')"/>`;

function highscoreTemplateInner() {
  return /*html*/ `
  <h2 id="highscoreH2">Highscore</h2>
  <ol class="list-group list-group-numbered">
  ${generatePlaces()}
  </ol>`;
}

function generatePlaces() {
  let pushedList = '';
  let name = highscore;
  for (let i = 0; i < highscore.length; i++) {
    pushedList += /*html*/ `<li class='list-group-item d-flex justify-content-between align-items-start'>
        <div class='ms-2 me-auto'>
          <div class='fw-bold'>${name[i]['name']}</div>${name[i]['score']} points
        </div>
      </li>`;
  }
  return pushedList;
}

function highscoreTemplate() {
  return /*html*/ ` <div onmouseleave="screenChange(mainFlag, 'screen')">
${highscoreTemplateInner()}
</div>`;
}

//implement templates & changing Screen (Div)
function loadTemp(template, container) {
  document.getElementById(container).innerHTML = '';
  document.getElementById(container).innerHTML = template;
}

function screenChange(template, container) {
  let div = document.getElementById(container);
  div.style.opacity = 0;
  setTimeout(function () {
    loadTemp(template, container);
    div.style.opacity = 1;
  }, 250);
}

//highscore content
function loadContent() {
  let highscoreAsText = localStorage.getItem('highscores');
  if (highscoreAsText) {
    highscore = JSON.parse(highscoreAsText);
  }
}

function saveContent() {
  let highscoreAsText = JSON.stringify(highscore);
  localStorage.setItem('highscores', highscoreAsText);
}

function sortHighscore() {
  highscore.sort(function (a, b) {
    return a.score - b.score;
  });
  highscore.reverse();
}
