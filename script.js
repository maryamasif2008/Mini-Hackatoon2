const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

const doneBtn = document.getElementById("done-btn");
const card = document.getElementById("todo-card");

doneBtn.addEventListener("click", () => {
  card.classList.toggle("bg-green-100");
  doneBtn.textContent = doneBtn.textContent === "Mark as Done" ? "Undo" : "Mark as Done";
});

function showCategory(category) {
  const allCards = document.querySelectorAll('.category-card');
  allCards.forEach(card => card.classList.add('hidden'));
  const selectedCards = document.querySelectorAll(`.${category}`);
  selectedCards.forEach(card => card.classList.remove('hidden'));
}

function showCategory(category) {
  const allCards = document.querySelectorAll('.card');
  const selected = document.querySelectorAll(`.${category}`);

  allCards.forEach(card => card.classList.add('hidden'));
  selected.forEach(card => card.classList.remove('hidden'));
}









