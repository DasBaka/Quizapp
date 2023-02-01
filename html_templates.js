//templates
let settingsTemp = /*html*/`
<fieldset class="pb-3 contentWidth d-flex flex-column align-items-center">
    <button type="button" class="btn hover w-75 px-5 py-3 mx-2 my-2 btn-secondary " id="typeSetting" onclick="toggleType()">Quiz-Type: Flags -> Country</button>
    <input class="w-50 mt-3" type="range" name="questionAmount" onload="getRangeValue()" oninput="getRangeValue()" id="questionAmount" step="1" min="1" max="100"><label for="questionAmount" id="rangeLabel">Questions: 50</label>
</fieldset>
<button type="button" class="btn hover w-50 contentWidth px-5 py-3 mx-2 my-2 btn-outline-secondary" onclick="startQuiz()">Let's Guess!</button> `;

let startTemp = /*html*/`
    <button type="button" class="btn hover contentWidth px-5 py-3 mx-2 my-2 btn-outline-primary" onclick="screenChange(settingsTemp, 'btnDiv' )">Start</button>`;

const countdown = ["3", "2", "1", "&#9872;"];

function answerTemplate(x) {
    let answers = "";
    for (let i = 0; i < 4; i++) {
     answers += /*html*/`<button type="button" class="btn hover contentWidth px-5 py-3 mx-2 my-2 btn-outline-primary" onclick="checkAnswer(${i}), disableAll()" id="answer${i}" >${x[i]}</button>`;
    };
    return answers;
}

function questionTemplate(x) {
   return /*html*/ `<img class="flag-image" src="flags/${x}" />`;
}