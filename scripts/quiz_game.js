/* Aula 20 MaiaQuiz  */
let titulo = document.querySelector("h1");
let instructions = document.querySelector("#instructions");
let warning = document.querySelector("#warning");
let progress = document.querySelector("#progress");
let points = 0; // pontos para o placar
let score = 0; // placar
let gameOverButton = document.getElementById("gameOver");
let quizContent = document.getElementById("quiz__content")

// AUDIO
let soundCorrect = document.querySelector("#soundCorrect");
let soundWrong = document.querySelector("#soundWrong");
let soundApplause = document.querySelector("#soundApplause");

// askQuestion
let numQuestion = document.querySelector("#numQuestion");
let askQuestion = document.querySelector("#askQuestion");

// ALTERNATIVAS
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let d = document.querySelector("#d");

// article com a class questoes
let articleQuestions = document.querySelector(".questions");
// ol li com as alternativas
let alternatives = document.querySelector("#alternatives");

const q0 = {
  numQuestion: 0,
  askQuestion: "askQuestion",
  alternativaA: "Alternativa A",
  alternativaB: "Alternativa B",
  alternativaC: "Alternativa C",
  alternativaD: "Alternativa D",
  correta: "0",
};
const q1 = {
  numQuestion: 1,
  askQuestion: "Qual foi o ano que Agatha Christie nasceu?",
  alternativaA: "1902",
  alternativaB: "1890",
  alternativaC: "1884",
  alternativaD: "1917",
  correta: "1890",
};
const q2 = {
  numQuestion: 2,
  askQuestion: "Qual o verdadeiro nome de Agatha?",
  alternativaA: "Agatha Marie Clarissa Miller",
  alternativaB: "Agatha Marie Clarissa Christie",
  alternativaC: "Agatha Marple Clarissa Miller",
  alternativaD: "Agatha Mary Clarissa Miller",
  correta: "Agatha Mary Clarissa Miller",
};
const q3 = {
  numQuestion: 3,
  askQuestion: "Onde Agatha nasceu?",
  alternativaA: "Londres",
  alternativaB: "Torquay",
  alternativaC: "Wallingford",
  alternativaD: "Liverpool",
  correta: "Torquay",
};
const q4 = {
  numQuestion: 4,
  askQuestion:
    "Qual foi a quantidade aproximada de livros publicados por Agatha?",
  alternativaA: "mais de 80 livros",
  alternativaB: "mais de 100 livros",
  alternativaC: "mais de 50 livros",
  alternativaD: "mais de 120 livros",
  correta: "mais de 80 livros",
};
const q5 = {
  numQuestion: 5,
  askQuestion: "Qual foi o livro de Agatha que precisou mudar de título?",
  alternativaA: "Morte no Nilo",
  alternativaB: "Punição para Inocência",
  alternativaC: "E não sobrou nenhum",
  alternativaD: "Assassinato no Expresso do Oriente",
  correta: "E não sobrou nenhum",
};
const q6 = {
  numQuestion: 6,
  askQuestion: "Qual foi o primeiro livro de Agatha a ir para os cinemas?",
  alternativaA: "Entre Facas e Segredos",
  alternativaB: "Assassinato no Expresso do Oriente",
  alternativaC: "Morte no Nilo",
  alternativaD: "Testemunha de Acusação",
  correta: "Testemunha de Acusação",
};
const q7 = {
  numQuestion: 7,
  askQuestion: "Qual foi a data que Agatha Christie desapareceu?",
  alternativaA: "5 de junho de 1927",
  alternativaB: "3 de dezembro de 1926",
  alternativaC: "12 de dezembro de 1936",
  alternativaD: "3 de janeiro de 1927",
  correta: "3 de dezembro de 1926",
};
const q8 = {
  numQuestion: 8,
  askQuestion: "Em qual série famosa fala sobre o desaparecimento de Agatha?",
  alternativaA: "The Good Doctor",
  alternativaB: "Grey's Anatomy",
  alternativaC: "Doctor Who",
  alternativaD: "House",
  correta: "Doctor Who",
};
const q9 = {
  numQuestion: 9,
  askQuestion: "Qual filme foi inspirado nas obras de Agatha?",
  alternativaA: "Punição para Inocência",
  alternativaB: "Assassinato no Expresso do Oriente",
  alternativaC: "Entre Facas e Segredos",
  alternativaD: "Morte no Nilo",
  correta: "Entre Facas e Segredos",
};
const q10 = {
  numQuestion: 10,
  askQuestion: "Qual alcunha foi dada a Agatha?",
  alternativaA: "Rainha do Crime",
  alternativaB: "Rainha do Drama",
  alternativaC: "Dama do Mistério",
  alternativaD: "Rainha do Horror",
  correta: "Rainha do Crime",
};

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questions = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

let number = document.querySelector("#number");
let total = document.querySelector("#total");

number.textContent = q1.numQuestion;

let totalOQuestions = questions.length - 1;
console.log("Total de questões " + totalOQuestions);
total.textContent = totalOQuestions;

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestion.textContent = q1.numQuestion;
askQuestion.textContent = q1.askQuestion;
a.textContent = q1.alternativaA;
b.textContent = q1.alternativaB;
c.textContent = q1.alternativaC;
d.textContent = q1.alternativaD;

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute("value", "1A");
b.setAttribute("value", "1B");
c.setAttribute("value", "1C");
d.setAttribute("value", "1D");

// PARA MONTAR AS PROXIMAS QUESTOES
function nextQuestion(nQuestion) {
  number.textContent = nQuestion;
  numQuestion.textContent = questions[nQuestion].numQuestion;
  askQuestion.textContent = questions[nQuestion].askQuestion;
  a.textContent = questions[nQuestion].alternativaA;
  b.textContent = questions[nQuestion].alternativaB;
  c.textContent = questions[nQuestion].alternativaC;
  d.textContent = questions[nQuestion].alternativaD;
  a.setAttribute("value", nQuestion + "A");
  b.setAttribute("value", nQuestion + "B");
  c.setAttribute("value", nQuestion + "C");
  d.setAttribute("value", nQuestion + "D");
  progress.value = parseInt(progress.value) + 1;
  //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternatives.addEventListener("dblclick", () => {
  //console.log('Duplo clique')
  points -= 10; // tirar 10 pontos em caso de duplo click
  if (numQuestion.value == 10 && points == 110) {
    points = 100;
  }
});

function blockAlternatives() {
  alternatives.classList.add("blocked");
}

function unblockAlternatives() {
  alternatives.classList.remove("blocked");
}

function blinkIfCorrect() {
  articleQuestions.classList.remove("wrong");
  articleQuestions.classList.add("correct");
}

function blinkIfWrong() {
  articleQuestions.classList.remove("correct");
  articleQuestions.classList.add("wrong");
}

function noBlink() {
  articleQuestions.classList.remove("correct");
  articleQuestions.classList.remove("wrong");
}

function checkIfIsCorrect(nQuestion, resposta) {
  let numeroDaQuestao = nQuestion.value;
  console.log("Questão " + numeroDaQuestao);

  let respostaEscolhida = resposta.textContent;

  let certa = questions[numeroDaQuestao].correta;

  if (respostaEscolhida == certa) {
    blinkIfCorrect();
    soundCorrect.play();
    points += 10;
    if (nQuestion.value == 1 && points == 20) {
      points = 10;
    }
  } else {
    blinkIfWrong();
    soundWrong.play();
  }
  setTimeout(() => {
    noBlink();
  }, 150);

  // atualizar placar
  score = points;
  instructions.textContent = "Pontos " + score;

  // bloquear a escolha de opcoes
  blockAlternatives();

  setTimeout(function () {
    next = numeroDaQuestao + 1;

    if (next > totalOQuestions) {
      console.log("Fim do Jogo!");
      fimDoJogo();
    } else {
      nextQuestion(next);
    }
  }, 150);
  unblockAlternatives();
}

function fimDoJogo() {
  soundApplause.play();

  let s = "s";
  points == 0 ? (s = "") : (s = s);
  instructions.textContent =
    "Fim de Jogo! Você conseguiu " + points + " ponto" + s;

  instructions.classList.add("score");

  // MOSTRAR BOTAO
  gameOverButton.style.display = "flex";
  quizContent.style.height = "100vh"

  // OCULTAR O ARTICLE DA QUESTAO
  articleQuestions.style.display = "none";

}

function restart() {
  points = 0; // zerar placar
  instructions.classList.remove("score");

  // REINICIAR O JOGO
  articleQuestions.style.display = "block";
  nextQuestion(1);
  instructions.textContent = "Leia a questão e clique na resposta correta";
  // OCULTAR BOTAO
  gameOverButton.style.display = "none";
}
