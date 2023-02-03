//templates
let startTemp = /*html*/ `
<button type="button" class="btn hover contentWidth px-5 py-3 mx-2 my-2 btn-outline-primary" onclick="startQuiz(), saveValue()">Start</button>
<fieldset class="contentWidth d-flex flex-row justify-content-between align-items-baseline">
   <p class="px-3">Questions:</p><input class="w-75 mt-3" type="range" name="questionAmount" value="15" onload="getRangeValue()" oninput="getRangeValue()" id="questionAmount" step="1" min="1" max="30"><label class="px-3" for="questionAmount" id="rangeLabel">15</label>
</fieldset>
<button type="button" class="btn hover contentWidth px-5 py-3 mx-2 my-2 btn-outline-primary" onclick="">Highscore</button> `;

const countdown = ['3', '2', '1', '&#9872;'];

function answerTemplate(x) {
  let answers = '';
  for (let i = 0; i < 4; i++) {
    answers += /*html*/ `<button type="button" class="btn hover contentWidth px-5 py-3 mx-2 my-2 btn-outline-primary" onclick="checkAnswer(${i}), disableAll(), stopTimer(), refreshProgressBar();" id="answer${i}" >${x[i]}</button>`;
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

let endTemplate = /*html*/ `
`;

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
