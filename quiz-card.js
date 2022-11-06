// Add Answer
const answer = document.querySelector('[data-js="answer"]');
const answerBtn = document.querySelector(
  '[data-js="quiz-card--answer-button"]'
);
answerBtn.addEventListener("click", () => {
  answer.classList.toggle("quiz-card__answer--hidden");
});
