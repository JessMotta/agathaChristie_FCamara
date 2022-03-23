let title = document.querySelector("h1");
let instructions = document.querySelector("#instruction");
let warning = document.querySelector("#warning");
let progress = document.querySelector("#progress");
let points = 0; // points
let score = 0;

//AUDIO
let somAcerto = document.querySelector("#somAcerto");
let somErro = document.querySelector("#somErro");
let somAplausos = document.querySelector("#somAplausos");


// ASKS
let numQuestion = document.querySelector('#numQuestion')
let askQuestion   = document.querySelector('#askQuestion')

// OPTIONS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestions = document.querySelector('.questions')
// ol li com as alternativas
let options = document.querySelector('#optionsQuiz')