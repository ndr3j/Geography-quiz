const data = [
  {
    id: 1,
    question: "What is the capital of Ecuador?",
    answers: [
      { answer: "Quito", isCorrect: true },
      { answer: "Bogota", isCorrect: false },
      { answer: "Havana", isCorrect: false },
      { answer: "Lima", isCorrect: false },
    ],
  },
  {
    id: 1,
    question: "How many states are in the United States",
    answers: [
      { answer: "52", isCorrect: false },
      { answer: "55", isCorrect: false },
      { answer: "50", isCorrect: true },
      { answer: "48", isCorrect: false },
    ],
  },
  {
    id: 1,
    question: "What is the capital of Albania?",
    answers: [
      { answer: "Skopje", isCorrect: false },
      { answer: "Tirana", isCorrect: true },
      { answer: "Pristina", isCorrect: false },
      { answer: "Sofia", isCorrect: false },
    ],
  },

  {
    id: 1,
    question: "Which country has the largest population in the world?",
    answers: [
      { answer: "China", isCorrect: false },
      { answer: "India", isCorrect: true },
      { answer: "Russia", isCorrect: false },
      { answer: "Brazil", isCorrect: false },
    ],
  },

  {
    id: 1,
    question: "What is the name of the longest river in Africa?",
    answers: [
      { answer: "Volga river", isCorrect: false },
      { answer: "Danube river", isCorrect: false },
      { answer: "The Amazon river", isCorrect: false },
      { answer: "The Nile river", isCorrect: true },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;
  showQuestion(qIndex);
};

play.addEventListener("click", () => {
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  playAgain();
});

const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";

  resultScreen.querySelector(
    ".correct"
  ).textContent = `Correct Answers: ${correctCount}`;

  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong Answers: ${wrongCount}`;

  resultScreen.querySelector(".score").textContent = `Score: ${
    (correctCount - wrongCount) * 10
  }`;
};

const showQuestion = (qNumber) => {
  if (qIndex === data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `
    <div class="answer">
        <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
        <label for="1">${item.answer}</label>
    </div>
    `
    )
    .join("");

  selectAnswer();
};

const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      qIndex++;
      showQuestion(qIndex);
    } else alert("Select an answer!");
  });
};

showQuestion(qIndex);
submitAnswer();
