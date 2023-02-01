createFlagsArray();
var currentType = "flag";
var currentTypeInvert = "country";
var currentQuestion = 0;

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

function hideInnerHTML(container) {
    document.getElementById(container).innerHTML = "";
}

//onload
function createFlagsArray() {
    for (let i = 0; i < countries.length; i++) {
        countries[i]["answers"] = generateAnswers(countries[i]["country"]);
    }
    shuffleArray(countries);
    console.log(countries);
}

function generateAnswers(country) {
    let answers = [country];
    for(let i = 1; i < 4; i++){
        let falseAnswer = countries[randomArrayIndex(countries)]["country"];
        while (answers.includes(falseAnswer)) {
            falseAnswer = countries[randomArrayIndex(countries)]["country"];
        }
        answers.push(falseAnswer);
    }
    shuffleArray(answers);
    return answers;
}

function resetAll() {}

//shuffle and randomize
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
        case "flag": 
            currentTypeInvert = currentType;
            toggle.innerHTML = /*html*/`<b>Quiz-Type: Country -> Flags</b>`
            currentType = "country";
            break;
        case "country": 
            currentTypeInvert = currentType;
            toggle.innerHTML = /*html*/`<b>Quiz-Type: Flags -> Country</b>`
            currentType = "flag";
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
    screenChange("Get ready...","questionText");
    screenChange("","btnDiv");
    countdownTimer();
}

function countdownTimer() {
    let i = 0;
    var startInterval = setInterval(function(){
        screenChange(countdown[i], 'screen')
        if(i < countdown.length){
            i++} else {
                clearInterval(startInterval);
                nextQuestion();
            };}
        , 1000);
}

//check answer
function checkAnswer(id) {
    if (countries[currentQuestion]["country"] == document.getElementById('answer' + id).innerHTML) {
        rightAnswer(id);
        prepareNext();
    } else {
        wrongAnswer(id);
        prepareNext()
    }
}

function rightAnswer(id) {
    let answer = document.getElementById('answer' + id);
    const classes = ["btn-success", "btn-outline-primary", "hover"];
    classes.forEach(element => {
        toggleIfRight(answer, element);
    });
}

function toggleIfRight(answer, element){
    if(answer.classList.contains(element)){
        answer.classList.remove(element);
    } else {
        answer.classList.add(element);
    }        
}

function wrongAnswer(id) {
    let answer = document.getElementById('answer' + id);
    const classes = ["btn-danger", "btn-outline-primary", "hover"];
    classes.forEach(element => {
       toggleIfWrong(answer, element);
    });
    rightAnswer(countries[currentQuestion]["answers"].indexOf(countries[currentQuestion]["country"]));
}

function toggleIfWrong(answer, element){
    if(answer.classList.contains(element)){
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
    screenChange(questionTemplate(countries[currentQuestion][currentType]), 'screen');
    screenChange(answerTemplate(countries[currentQuestion]["answers"]), 'btnDiv');
    screenChange("What's the " + currentTypeInvert + " to this " + currentType + "?","questionText");
}

async function prepareNext() {
    currentQuestion += 1;
    await wait(2500);
    nextQuestion();
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }