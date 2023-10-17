"use strict";

// --- ELEMENTS  --- //
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const header = document.querySelector("h1");
const button = document.querySelector("button");
// --- END OF ELEMENTS  --- //

// ---- FUNCTIONS ---- //
let randomImgSrc1;
let randomImgSrc2;

const getRandomDiceImg = () => {
  const randomNum = Math.floor(Math.random() * 6) + 1;
  return `dice${randomNum}.png`;
};

const updateDiceImg = () => {
  randomImgSrc1 = `images/${getRandomDiceImg()}`;
  randomImgSrc2 = `images/${getRandomDiceImg()}`;

  img1.setAttribute("src", randomImgSrc1);
  img2.setAttribute("src", randomImgSrc2);
};

const updateHeader = () => {
  const randomNum1 = parseInt(randomImgSrc1.match(/\d/));
  const randomNum2 = parseInt(randomImgSrc2.match(/\d/));

  if (randomNum1 > randomNum2) {
    header.innerHTML = "🚩 Play 1 Wins!";
  } else if (randomNum1 < randomNum2) {
    header.innerHTML = "🚩 Play 2 Wins!";
  } else {
    header.innerHTML = "Draw!";
  }
};

const rollDice = () => {
  updateDiceImg();
  updateHeader();
};
// ---- END OF FUNCTIONS ---- //

// ---- EVENT HANDLERS ---- //
button.addEventListener("click", rollDice);
// ---- EVENT HANDLERS ---- //
