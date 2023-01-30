//import {countries} from './countrylist.js';
//import {startTemplate} from './html_templates.js';
createFlagsArray();
var currentType = 0;

//implement templates & changing Screen (Div)
function loadTemp(template, container) {
   document.getElementById(container).innerHTML = "";
   document.getElementById(container).innerHTML = template;
}

function screenChange(template, container) {
    let div = document.getElementById(container);
    div.style.opacity = 0;
    setTimeout(function(){
        loadTemp(template, container);
        div.style.opacity = 1;}
        , 250);
}

function showQuestion(x) {
   return `<img class="flag-Image" src="flags/${countries[x]["flag"]}" />`;
}

//onload
function createFlagsArray() {
    for (let i = 0; i < countries.length; i++) {
        countries[i]["answers"] = generateAnswers(countries[i]["name"]);
    }
    shuffleArray(countries);
    console.log(countries);
}

function generateAnswers(country) {
    let answers = [country];
    for(let i = 1; i < 4; i++){
        let falseAnswer = countries[randomArrayIndex(countries)]["name"];
        while (answers.includes(falseAnswer)) {
            falseAnswer = countries[randomArrayIndex(countries)]["name"];
        }
        answers.push(falseAnswer);
    }
    shuffleArray(answers);
    return answers;
}

//shuffe and randomize
function randomArrayIndex(array) {
    let index = Math.floor(Math.random()*array.length);
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

//settings
function toggleType() {
    let toggle = document.getElementById("typeSetting");
    switch (currentType) {
        case 0: 
            toggle.innerHTML = /*html*/`<b>Country -> Flags</b>`
            currentType += 1;
            break;
        case 1: 
            toggle.innerHTML = /*html*/`<b>Flags -> Country</b>`
            currentType -= 1;
            break;
    }
}

function getRangeValue() {
    let amount = document.getElementById("rangeLabel");
    let val = document.getElementById("questionAmount").value;
    amount.innerHTML = `Questions: ` + Number(val);
}

//start quiz
function startQuiz() {
    let i = 0;
    var startInterval = setInterval(function(){
        screenChange(countdown[i], 'screen')
        if(i < countdown.length){
            i++} else {
                clearInterval(startInterval);
                screenChange(showQuestion(i), 'screen');
            };}
        , 1250);
}

