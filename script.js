/* 
Alle Darkmodes: 
body => .darkmode
sun => .moon
quiz-card => .quiz-card--darkmode
.quiz-card__bookmark--darkmode
*/

const quizCard = document.querySelector('[data-js="quiz-card"]');
const bookmark = document.querySelector('[data-js="bookmark"]');

// Darkmode Function
const Sun = document.querySelector('[data-js="sun"]');
const Cat = document.querySelector('[data-js="Cat"');
const btnSun = document.querySelector('[data-js="btn-sun"]');
const body = document.querySelector('[data-js="body"]');

btnSun.addEventListener("click", () => {
  body.classList.toggle("darkmode");
  Sun.classList.toggle("moon");
  quizCard.classList.toggle("quiz-card--darkmode");
  bookmark.classList.toggle("quiz-card__bookmark--darkmode");
  Cat.classList.toggle("nightCat");
});
