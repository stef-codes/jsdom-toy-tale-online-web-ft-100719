let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyForm = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyForm.style.display = "block";
    } else {
      toyForm.style.display = "none";
    }
  });

  fetchToys()


});

function fetchToys() {
  fetch('http://localhost:3000/toys')
  .then(resp => resp.json())
  .then(toys => renderToys(toys));
}

function renderToys(toys) {
  const toy_card = document.getElementById('toy-collection')
  toys.forEach(toy => {
    const toyDiv = document.createElement('div')
    // toy.classList.add("card")
    div = `${toy}`
    toy_card.appendChild(toyDiv)
  })
}