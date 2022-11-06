/* 
Alle Darkmodes: 
body => .darkmode
sun => .moon
quiz-card => .quiz-card--darkmode
.quiz-card__bookmark--darkmode
*/

const body = document.querySelector('[data-js="body"]');
const btnSun = document.querySelector('[data-js="btn-sun]');
const Sun = document.querySelector('[data-js="sun]');
const answer = document.querySelector('[data-js="answer"]');
const answerBtn = document.querySelector(
  '[data-js="quiz-card__answer-button""]'
);
const quizCard = document.querySelector('[data-js="quiz-card"]');
const bookmark = document.querySelector('[data-js="bookmark"]');

// Darkmode Function (Noch nicht vervollständigt!)

btnSun.addEventListener("click", (event) => {
  body.classList.toggle("darkmode");
});

// Add Answer

answerBtn.addEventListener("click", () => {
  answer.classList.toggle("quiz-card__answer--hidden");
});
