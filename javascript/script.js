const question = document.querySelector('[data-js="question"');
const answerBtn = document.querySelector(
  '[data-js="quiz-card--answer-button"]'
);
const answer = document.querySelector('[data-js="answer"]');
const tags = document.querySelector('[data-js="quiz-card__tags"]');

answerBtn.addEventListener("click", () => {
  answer.classList.add("addedClassViaJS");
});

/*
answer.addEventListener('click', () => {
   if (answer.classList.contains("quiz-card__answer--hidden")) {
    answer.setAttribute.
   }
});
*/
