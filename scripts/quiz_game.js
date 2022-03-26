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
  askQuestion: "Qual foi o ano que Agatha Christie nasceu?",
  alternativaA: "1902",
  alternativaB: "1890",
  alternativaC: "1884",
  alternativaD: "1917",
  correct: "1890",
};
const q2 = {
  numQuestion: 2,
  askQuestion: "Qual o verdadeiro nome de Agatha?",
  alternativaA: "Agatha Marie Clarissa Miller",
  alternativaB: "Agatha Marie Clarissa Christie",
  alternativaC: "Agatha Marple Clarissa Miller",
  alternativaD: "Agatha Mary Clarissa Miller",
  correct: "Agatha Mary Clarissa Miller",
};
const q3 = {
  numQuestion: 3,
  askQuestion: "Onde Agatha nasceu?",
  alternativaA: "Londres",
  alternativaB: "Torquay",
  alternativaC: "Wallingford",
  alternativaD: "Liverpool",
  correct: "Torquay",
};
const q4 = {
  numQuestion: 4,
  askQuestion: "Qual foi a quantidade aproximada de livros publicados por Agatha?",
  alternativaA: "mais de 80 livros",
  alternativaB: "mais de 100 livros",
  alternativaC: "mais de 50 livros",
  alternativaD: "mais de 120 livros",
  correct: "mais de 80 livros",
};
const q5 = {
  numQuestion: 5,
  askQuestion: "Qual foi o livro de Agatha que precisou mudar de título?",
  alternativaA: "Morte no Nilo",
  alternativaB: "Punição para Inocência",
  alternativaC: "E não sobrou nenhum",
  alternativaD: "Assassinato no Expresso do Oriente",
  correct: "E não sobrou nenhum",
};
const q6 = {
  numQuestion: 6,
  askQuestion: "Qual foi o primeiro livro de Agatha a ir para os cinemas?",
  alternativaA: "Entre Facas e Segredos",
  alternativaB: "Assassinato no Expresso do Oriente",
  alternativaC: "Morte no Nilo",
  alternativaD: "Testemunha de Acusação",
  correct: "Testemunha de Acusação",
};
const q7 = {
  numQuestion: 7,
  askQuestion: "Qual foi a data que Agatha Christie desapareceu?",
  alternativaA: "5 de junho de 1927",
  alternativaB: "3 de dezembro de 1926",
  alternativaC: "12 de dezembro de 1936",
  alternativaD: "3 de janeiro de 1927",
  correct: "3 de dezembro de 1926",
};
const q8 = {
  numQuestion: 8,
  askQuestion: "Em qual série famosa fala sobre o desaparecimento de Agatha?",
  alternativaA: "The Good Doctor",
  alternativaB: "Grey's Anatomy",
  alternativaC: "Doctor Who",
  alternativaD: "House",
  correct: "Doctor Who",
};
const q9 = {
  numQuestion: 9,
  askQuestion: "Qual filme foi inspirado nas obras de Agatha?",
  alternativaA: "Punição para Inocência",
  alternativaB: "Assassinato no Expresso do Oriente",
  alternativaC: "Entre Facas e Segredos",
  alternativaD: "Morte no Nilo",
  correct: "Entre Facas e Segredos",
};
const q10 = {
  numQuestion: 10,
  askQuestion: "Qual alcunha foi dada a Agatha?",
  alternativaA: "Rainha do Crime",
  alternativaB: "Rainha do Drama",
  alternativaC: "Dama do Mistério",
  alternativaD: "Rainha do Horror",
  correct: "Rainha do Crime",
};
