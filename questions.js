const questions = [
    {
        question: "1. What is a word, phrase, number, or other sequence of characters that reads the same backward as forward?",
        options: ["A. Palindrome", "B. anagrams", "C. Semordnilap", "D. Lipogram"],
        answer: "A. Palindrome"
    },
    {
        question: "2. In which country would you find Mount Kilimanjaro?",
        options: ["A. Mexico", "B. Angola", "C. Australia", "D. Tanzania"],
        answer: "D. Tanzania"
    },
    {
        question: "3. Which planet has the most moons?",
        options: ["A. Earth", "B. Saturn", "C. Jupiter", "D. Mercury"],
        answer: "B. Saturn"
    },
    {
        question: "4. What year was the United Nations established?",
        options: ["A. 1941", "B. 1950", "C. 1945", "D. 1955"],
        answer: "C. 1945"
    },
    {
        question: "5. Which country drinks the most coffee per capita?",
        options: ["A. Finland", "B. United State", "C. United Kingdom", "D. France"],
        answer: "A. Finland"
    }
];

let index = 0;
let score = 0;
let timer;
let timeLeft = 10;

const quizContent = document.querySelector('.quiz-content');
const quizTimer = document.querySelector('.quiz-timer');
const questionElement = document.querySelector('.question-element');
const optionSpan = document.querySelector('.option-list');
const questionTotal = document.querySelector('.question-total');
const nextbtn = document.querySelector('.next');
const resultContainer = document.querySelector('.result-container');

function loadQuestion(){
    clearInterval(timer);
    timeLeft = 10;
    quizTimer.textContent = timeLeft + " s";

    timer = setInterval(() => {
        timeLeft--;
        quizTimer.textContent = timeLeft + " s";

        if (timeLeft <= 0) {
            clearInterval(timer)
            nextQuestion();
        }
    }, 1000);

    const current = questions[index];
    questionElement.textContent = current.question;

    optionSpan.innerHTML = "";
    nextbtn.disabled = true;
    nextbtn.classList.remove("enabled");

    current.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => selectOption(btn, current.answer);
        optionSpan.appendChild(btn);
    });

    questionTotal.textContent = `${index + 1} of 5 Questions`
}

function selectOption(button, correctAnswer) {
    Array.from(optionSpan.children).forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");

    if (button.textContent === correctAnswer) score++;

    nextbtn.disabled = false;
    nextbtn.classList.add("enabled");
}

nextbtn.addEventListener("click", nextQuestion);

function nextQuestion() {
    index++;
    if (index === questions.length) {
        showResult();
    } else {
        loadQuestion();
    }
}

function showResult() {
    quizContent.classList.add("hide");
    resultContainer.classList.add("show");
    document.querySelector(".score").textContent = `You Score ${score} out of 5`;
}

loadQuestion();