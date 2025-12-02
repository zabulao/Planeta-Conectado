window.onload = function() {
    let resposta = confirm("Você quer salvar o meio ambiente?");

    if (!resposta) {
        
        window.location.href = "https://www.google.com";
    }
};

const questions = [
  {
    question: "1) O que é TI Verde?",
    options: {
      a: "Apenas usar computadores mais modernos.",
      b: "Conjunto de práticas sustentáveis que reduzem impactos ambientais.",
      c: "Criar tecnologias exclusivamente recicláveis."
    },
    correct: "b"
  },

  {
    question: "2) Qual é um objetivo da TI Verde?",
    options: {
      a: "Aumentar o descarte de lixo eletrônico.",
      b: "Reduzir consumo de energia e otimizar recursos.",
      c: "Comprar mais computadores."
    },
    correct: "b"
  },

  {
    question: "3) O que é descarte correto de e-lixo?",
    options: {
      a: "Jogar no lixo comum.",
      b: "Levar a pontos de coleta e reciclagem.",
      c: "Guardar em casa."
    },
    correct: "b"
  },

  {
    question: "4) Qual prática reduz o consumo de energia?",
    options: {
      a: "Virtualização de servidores.",
      b: "Deixar computadores ligados sempre.",
      c: "Usar equipamentos antigos."
    },
    correct: "a"
  },

  {
    question: "5) O que caracteriza nuvem sustentável?",
    options: {
      a: "Data centers com energia renovável.",
      b: "Armazenar arquivos sem limite.",
      c: "Servidores antigos locais."
    },
    correct: "a"
  }
];

let index = 0;
let score = 0;

function loadQuestion() {
  const q = questions[index];

  document.getElementById("question-container").innerHTML = `
    <p>${q.question}</p>
    <label><input type="radio" name="answer" value="a"> ${q.options.a}</label>
    <label><input type="radio" name="answer" value="b"> ${q.options.b}</label>
    <label><input type="radio" name="answer" value="c"> ${q.options.c}</label>
  `;
}

function nextQuestion() {
  const selected = document.querySelector("input[name='answer']:checked");

  if (!selected) {
    alert("Selecione uma resposta!");
    return;
  }

  if (selected.value === questions[index].correct) {
    score++;
  }

  index++;

  if (index < questions.length) {
    loadQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  document.getElementById("quiz-box").style.display = "none";

  document.getElementById("quiz-result").innerHTML = `
    Você acertou <strong>${score}</strong> de <strong>${questions.length}</strong> perguntas!<br><br>
    <button class="btn" onclick="restartQuiz()">Jogar Novamente</button>
  `;
}

function restartQuiz() {
  index = 0;
  score = 0;

  document.getElementById("quiz-result").innerHTML = "";
  document.getElementById("quiz-box").style.display = "block";

  loadQuestion();
}

loadQuestion();
