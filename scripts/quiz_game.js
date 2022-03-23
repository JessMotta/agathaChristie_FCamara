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
let numQuestion = document.querySelector("#numQuestion");
let askQuestion = document.querySelector("#askQuestion");

// OPTIONS
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let d = document.querySelector("#d");

// article com a class questoes
let articleQuestions = document.querySelector(".questions");
// ol li com as alternativas
let options = document.querySelector("#optionsQuiz");

const q0 = {
  numQuestion: 0,
  askQuestion: "askQuestion",
  alternativaA: "Alternativa A",
  alternativaB: "Alternativa B",
  alternativaC: "Alternativa C",
  alternativaD: "Alternativa D",
  correct: "0",
};
const q1 = {
  numQuestion: 1,
  askQuestion: "Boreal é o mesmo que...",
  alternativaA: "Sul",
  alternativaB: "Leste",
  alternativaC: "Norte",
  alternativaD: "Oeste",
  correct: "Norte",
};
const q2 = {
  numQuestion: 2,
  askQuestion: "Qual é a capital do Brasil?",
  alternativaA: "Rio de Janeiro",
  alternativaB: "Brasília",
  alternativaC: "Salvador",
  alternativaD: "Lisboa",
  correct: "Brasília",
};
const q3 = {
  numQuestion: 3,
  askQuestion: "Austral é o mesmo que...",
  alternativaA: "Oeste",
  alternativaB: "Leste",
  alternativaC: "Norte",
  alternativaD: "Sul",
  correct: "Sul",
};
const q4 = {
  numQuestion: 4,
  askQuestion: "A linha do Equador divide a Terra em...",
  alternativaA: "Leste e Oeste",
  alternativaB: "Norte e Sul",
  alternativaC: "Verão e Inverno",
  alternativaD: "Solstícios e Eclipses",
  correct: "Norte e Sul",
};
const q5 = {
  numQuestion: 5,
  askQuestion: "Nascente é o mesmo que...",
  alternativaA: "Lado que o sol nasce",
  alternativaB: "Abaixo do Equador",
  alternativaC: "Lado que o sol se põe",
  alternativaD: "Acima do Equador",
  correct: "Lado que o sol nasce",
};
const q6 = {
  numQuestion: 6,
  askQuestion: "Qual é o clima predominante do Brasil?",
  alternativaA: "Polar",
  alternativaB: "Tropical",
  alternativaC: "Desértico",
  alternativaD: "Temperado do Norte",
  correct: "Tropical",
};
const q7 = {
  numQuestion: 7,
  askQuestion: "Poente é o mesmo que...",
  alternativaA: "Lado onde o sol se põe",
  alternativaB: "Lado onde o sol nasce",
  alternativaC: "Abaixo do Equador",
  alternativaD: "Acima do Equador",
  correct: "Lado onde o sol se põe",
};
const q8 = {
  numQuestion: 8,
  askQuestion: "O Brasil se localiza em qual continente?",
  alternativaA: "África",
  alternativaB: "Europa",
  alternativaC: "Oceania",
  alternativaD: "América",
  correct: "América",
};
const q9 = {
  numQuestion: 9,
  askQuestion: "Qual é a única capital do Brasil cortada pela linha do Equador?",
  alternativaA: "Belém",
  alternativaB: "São Luís",
  alternativaC: "Macapá",
  alternativaD: "Boa Vista",
  correct: "Macapá",
};
const q10 = {
  numQuestion: 10,
  askQuestion: "Considerando a extensão territorial o Brasil é o ...",
  alternativaA: "3º maior",
  alternativaB: "2º maior",
  alternativaC: "4º maior",
  alternativaD: "5º maior",
  correct: "5º maior",
};
