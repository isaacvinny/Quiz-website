const startQuizBtn = document.querySelector('.start-quiz-btn');
const quizGuildlines = document.querySelector('.quiz-guildlines');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');


startQuizBtn.addEventListener('click', function(){
    quizGuildlines.classList.add('show-quiz-guildlines');
    main.classList.add('show-quiz-guildlines');
});
exitBtn.addEventListener('click', function(){
    quizGuildlines.classList.remove('show-quiz-guildlines');
    main.classList.remove('show-quiz-guildlines');
});

