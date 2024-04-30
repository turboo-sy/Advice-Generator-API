let cardText = document.querySelector(".card-text");
let titleCard = document.querySelector(".title-card");
let text = document.querySelector("blockquote");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.slip.id);
      titleCard.innerHTML = `Advice #${data.slip.id}`;
      text.innerHTML = `"${data.slip.advice}"`;
    });
});
