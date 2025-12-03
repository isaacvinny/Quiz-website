const questions = [
    {
        question: "What is a word, phrase, number, or other sequence of characters that reads the same backward as forward?",
        options: ["A. Palindrome", "B. anagrams", "C. Semordnilap", "D. Lipogram"],
        answer: "A. Palindrome"
    },
    {
        question: "In which country would you find Mount Kilimanjaro?",
        options: ["A. Mexico", "B. Angola", "C. Australia", "D. Tanzania"],
        answer: "D. Tanzania"
    },
    {
        question: "Which planet has the most moons?",
        options: ["A. Earth", "B. Saturn", "C. Jupiter", "D. Mercury"],
        answer: "B. Saturn"
    },
    {
        question: "What year was the United Nations established?",
        options: ["A. 1941", "B. 1950", "C. 1945", "D. 1955"],
        answer: "C. 1945"
    },
    {
        question: "In what year was the first iPhone released?",
        options: ["A. 2007", "B. 1999", "C. 2005", "D. 1980"],
        answer: "A. 2007"
    },
    {
        question: "What consumer audio device did Sony launch in 1979 that popularized portable music?",
        options: ["A. Palito", "B. Discman", "C. The Walkman", "D. Ipod"],
        answer: "C. The Walkman"
    },
    {
        question: "What does USB stand for?",
        options: ["A. Universal Serial Box", "B. Universal Serial Bus", "C. Universal Sequence Bus", "D. Univeral Sequence Box"],
        answer: "B. Universal Serial Bus"
    },
    {
        question: "What is the square root of 256?",
        options: ["A. 16", "B. 32", "C. 36", "D. 42"],
        answer: "A. 16"
    },
    {
        question: "Which river is the longest in Africa?",
        options: ["A. River Naija", "B. River Nile", "C. River Zile", "D. River Benue"],
        answer: "B. River Nile"
    },
    {
        question: "What’s the SI unit of electrical resistance?",
        options: ["A. Watt", "B. Kilogram", "C. Ampere", "D. Ohm"],
        answer: "D. Ohm"
    },
    {
        question: "Which metal is most commonly used for electrical wiring?",
        options: ["A. Aluminium", "B. Copper", "C. Iron", "D. Lithium"],
        answer: "B. Copper"
    },
    {
        question: "Which month has 28 days?",
        options: ["A. January", "B. Febuary", "C. November", "D. All of them"],
        answer: "D. All of them"
    },
    {
        question: "What color are school buses typically in the U.S.?",
        options: ["A. Yellow", "B. White", "C. Blue", "D. Brown"],
        answer: "A. Yellow"
    },
    {
        question: "Which continent has the most people? ",
        options: ["A. Australia", "B. Africa", "C. Asia", "D. America"],
        answer: "C. Asia"
    },
    {
        question: "What is the freezing point of water in Celsius?",
        options: ["A. 0°C", "B. 10°C", "C. 100°C", "D. 1000°C"],
        answer: "A. 0°C"
    },
    {
        question: "What do caterpillars turn into?",
        options: ["A. Cockroach", "B. Butterflies", "C. Bird", "D. Fish"],
        answer: "B. Butterflies"
    },
    {
        question: "What creature has three hearts and blue blood?",
        options: ["A. Werewolf", "B. Ogre", "C. Dragon", "D. Octopus"],
        answer: "D. Octopus"
    },
    {
        question: "Which animal’s milk is naturally pink? ",
        options: ["A. Hippopotamus", "B. Horse", "C. Elephant", "D. Bear"],
        answer: "A. Hippopotamus"
    },
    {
        question: "Which fruit has seeds on the outside?",
        options: ["A. Avocado", "B. Cantaloupe", "C. Strawberry", "D. Jackfruit"],
        answer: "C. Strawberry"
    },
    {
        question: "Which music awards are presented by the Recording Academy?",
        options: ["A. The MTV Award", "B. The Grammys", "C. Golden Global Award", "D. World Music Award"],
        answer: "B. The Grammys"
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

function shuffleQuestions(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

shuffleQuestions(questions); 

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

    questionTotal.textContent = `${index + 1} of 20 Questions`
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
    document.querySelector(".score").textContent = `You Score ${score} out of 20`;
}

loadQuestion();
