/* 
Alle Darkmodes: 
body => .darkmode
sun => .moon
quiz-card => .quiz-card--darkmode
.quiz-card__bookmark--darkmode
*/

const quizCard = document.querySelector('[data-js="quiz-card"]');
const bookmark = document.querySelector('[data-js="bookmark"]');

// Darkmode Function (Noch nicht vervollständigt!)
const Sun = document.querySelector('[data-js="sun"]');
const btnSun = document.querySelector('[data-js="btn-sun"]');
const body = document.querySelector('[data-js="body"]');

/*btnSun.addEventListener("click", () => {
  body.classList.toggle("darkmode");
});*/

btnSun.addEventListener("click", () => {
  if(body.classList.contains('darkmode') == 'true')
});
