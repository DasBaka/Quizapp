import {countries} from './countrylist.js';
createFlagsArray();

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

//Merken (generiert alle Flags in div)
function Test() {
    for (let i = 0; i < countries.length; i++) {
    document.getElementById('test').innerHTML += /*html*/ `
    <img src="flags/${countries[i]["flag"]}">`}
}