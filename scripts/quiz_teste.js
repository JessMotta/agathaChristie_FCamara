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
let numQuestao = document.querySelector("#numQuestao");
let pergunta = document.querySelector("#pergunta");

// OPTIONS
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let d = document.querySelector("#d");

// article com a class questions
let articleQuestions = document.querySelector(".questions");
// ol li com as alternativas
let options = document.querySelector("#optionsQuiz");

const q0 = {
  numQuestao: 0,
  pergunta: "Pergunta",
  alternativaA: "Alternativa A",
  alternativaB: "Alternativa B",
  alternativaC: "Alternativa C",
  alternativaD: "Alternativa D",
  correta: "0",
};
const q1 = {
  numQuestao: 1,
  pergunta: "Qual foi o ano que Agatha Christie nasceu?",
  alternativaA: "1902",
  alternativaB: "1890",
  alternativaC: "1884",
  alternativaD: "1917",
  correta: "1890",
};
const q2 = {
  numQuestao: 2,
  pergunta: "Qual o verdadeiro nome de Agatha?",
  alternativaA: "Agatha Marie Clarissa Miller",
  alternativaB: "Agatha Marie Clarissa Christie",
  alternativaC: "Agatha Marple Clarissa Miller",
  alternativaD: "Agatha Mary Clarissa Miller",
  correta: "Agatha Mary Clarissa Miller",
};
const q3 = {
  numQuestao: 3,
  pergunta: "Onde Agatha nasceu?",
  alternativaA: "Londres",
  alternativaB: "Torquay",
  alternativaC: "Wallingford",
  alternativaD: "Liverpool",
  correta: "Torquay",
};
const q4 = {
  numQuestao: 4,
  pergunta:
    "Qual foi a quantidade aproximada de livros publicados por Agatha?",
  alternativaA: "mais de 80 livros",
  alternativaB: "mais de 100 livros",
  alternativaC: "mais de 50 livros",
  alternativaD: "mais de 120 livros",
  correta: "mais de 80 livros",
};
const q5 = {
  numQuestao: 5,
  pergunta: "Qual foi o livro de Agatha que precisou mudar de título?",
  alternativaA: "Morte no Nilo",
  alternativaB: "Punição para Inocência",
  alternativaC: "E não sobrou nenhum",
  alternativaD: "Assassinato no Expresso do Oriente",
  correta: "E não sobrou nenhum",
};
const q6 = {
  numQuestao: 6,
  pergunta: "Qual foi o primeiro livro de Agatha a ir para os cinemas?",
  alternativaA: "Entre Facas e Segredos",
  alternativaB: "Assassinato no Expresso do Oriente",
  alternativaC: "Morte no Nilo",
  alternativaD: "Testemunha de Acusação",
  correta: "Testemunha de Acusação",
};
const q7 = {
  numQuestao: 7,
  pergunta: "Qual foi a data que Agatha Christie desapareceu?",
  alternativaA: "5 de junho de 1927",
  alternativaB: "3 de dezembro de 1926",
  alternativaC: "12 de dezembro de 1936",
  alternativaD: "3 de janeiro de 1927",
  correta: "3 de dezembro de 1926",
};
const q8 = {
  numQuestao: 8,
  pergunta: "Em qual série famosa fala sobre o desaparecimento de Agatha?",
  alternativaA: "The Good Doctor",
  alternativaB: "Grey's Anatomy",
  alternativaC: "Doctor Who",
  alternativaD: "House",
  correta: "Doctor Who",
};
const q9 = {
  numQuestao: 9,
  pergunta: "Qual filme foi inspirado nas obras de Agatha?",
  alternativaA: "Punição para Inocência",
  alternativaB: "Assassinato no Expresso do Oriente",
  alternativaC: "Entre Facas e Segredos",
  alternativaD: "Morte no Nilo",
  correta: "Entre Facas e Segredos",
};
const q10 = {
  numQuestao: 10,
  pergunta: "Qual alcunha foi dada a Agatha?",
  alternativaA: "Rainha do Crime",
  alternativaB: "Rainha do Drama",
  alternativaC: "Dama do Mistério",
  alternativaD: "Rainha do Horror",
  correta: "Rainha do Crime",
};

// UM ARRAY DE OBJETOS COM TODAS AS questions
const questions = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

let number = document.querySelector("#number");
let total = document.querySelector("#total");

number.textContent = q1.numQuestao;

let totalQuestions = questions.length - 1;
console.log("Total de questões " + totalQuestions);
total.textContent = totalQuestions;

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao;
pergunta.textContent = q1.pergunta;
a.textContent = q1.alternativaA;
b.textContent = q1.alternativaB;
c.textContent = q1.alternativaC;
d.textContent = q1.alternativaD;

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute("value", "1A");
b.setAttribute("value", "1B");
c.setAttribute("value", "1C");
d.setAttribute("value", "1D");


// PARA MONTAR AS PROXIMAS questions
function proximaQuestao(nQuestion) {
  number.textContent = nQuestion
  numQuestao.textContent = questions[nQuestion].numQuestao
  pergunta.textContent   = questions[nQuestion].pergunta
  a.textContent = questions[nQuestion].alternativaA
  b.textContent = questions[nQuestion].alternativaB
  c.textContent = questions[nQuestion].alternativaC
  d.textContent = questions[nQuestion].alternativaD
  a.setAttribute('value', nQuestion+'A')
  b.setAttribute('value', nQuestion+'B')
  c.setAttribute('value', nQuestion+'C')
  d.setAttribute('value', nQuestion+'D')
  progress.value = parseInt(progress.value) + 1
  //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
options.addEventListener('dblclick', () => {
  //console.log('Duplo clique')
  points -= 10 // tirar 10 pontos em caso de duplo click
  if(numQuestao.value == 10 && points == 110) { points = 100 }
})

function bloquearAlternativas() {
  options.classList.add('bloqueado')
}

function desbloquearAlternativas() {
  options.classList.remove('bloqueado')
}


function piscarNoAcerto() {
  articleQuestions.classList.remove('errou')
  articleQuestions.classList.add('acertou')
}

function piscarNoErro() {
  articleQuestions.classList.remove('acertou')
  articleQuestions.classList.add('errou')
}

function tirarPiscar() {
  articleQuestions.classList.remove('acertou')
  articleQuestions.classList.remove('errou')
}


function verificarSeAcertou(nQuestion, resposta) {

  let numberOfQuestion = nQuestion.value
  console.log("Questão " + numberOfQuestion)

  let respostaEscolhida = resposta.textContent
  //console.log("RespU " + respostaEscolhida)

  let certa = questions[numberOfQuestion].correta
  //console.log("RespC " + certa)

  if(respostaEscolhida == certa) {
      //console.log("Acertou")
      //respostaEsta.textContent = "Correta 😊"
      piscarNoAcerto()
      somAcerto.play()
      points += 10 // pontos = pontos + 10
      if(nQuestion.value == 1 && points == 20) { points = 10 }
  } else {
      //console.log("Errou!")
      //respostaEsta.textContent = "Errada 😢"
      piscarNoErro()
      somErro.play()
  }
  setTimeout(() => {
      tirarPiscar()
  }, 150);
  
  // atualizar score
  score = points
  instructions.textContent = "Pontos " + score

  // bloquear a escolha de opcoes
  bloquearAlternativas()

  setTimeout(function() {

      proxima = numberOfQuestion+1

      if(proxima > totalQuestions) {
          console.log('Fim do Jogo!')
          fimDoJogo()
      } else {
          proximaQuestao(proxima)
      }
  }, 150)
  desbloquearAlternativas()
}

function fimDoJogo() {

  somAplausos.play()

  let s = 's'
  points == 0 ? s = '' : s = s
  instructions.textContent = "Fim de Jogo! Você conseguiu " + points + " ponto"+ s

  instructions.classList.add('score')

  // OCULTAR O ARTICLE DA QUESTAO
  articleQuestions.style.display = 'none'

  setTimeout(function() {
      points = 0 // zerar score
      //location.reload();
      instructions.classList.remove('score')
      // REINICIAR O JOGO
      articleQuestions.style.display = 'block'
      proximaQuestao(1)
      instructions.textContent = 'Leia a questão e clique na resposta correta'
  }, 8000)

}