//templates
let settingsTemp = /*html*/ `
<fieldset class="pb-3 contentWidth d-flex flex-column align-items-center">
    <button type="button" class="btn hover w-75 px-5 py-3 mx-2 my-2 btn-secondary " id="typeSetting" onclick="toggleType()">Quiz-Type: Flags -> Country</button>
    <input class="w-75 mt-3" type="range" name="questionAmount" onload="getRangeValue()" oninput="getRangeValue()" id="questionAmount" step="1" min="1" max="100"><label for="questionAmount" id="rangeLabel">Questions: 50</label>
</fieldset>
<button type="button" class="btn hover contentWidth px-5 py-3 mx-2 my-2 btn-outline-secondary" onclick="startQuiz(), saveValue()">Let's Guess!</button> `;

let startTemp = /*html*/ `
    <button type="button" class="btn hover contentWidth px-5 py-3 mx-2 my-2 btn-outline-primary" onclick="screenChange(settingsTemp, 'btnDiv' )">Start</button>`;

const countdown = ['3', '2', '1', '&#9872;'];

function answerTemplate(x) {
  let answers = '';
  for (let i = 0; i < 4; i++) {
    answers += /*html*/ `<button type="button" class="btn hover contentWidth px-5 py-3 mx-2 my-2 btn-outline-primary" onclick="checkAnswer(${i}), disableAll(), stopTimer()" id="answer${i}" >${x[i]}</button>`;
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

function hideInnerHTML(container) {
  document.getElementById(container).innerHTML = '';
}
