// HTML DOM Elements
let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let span3 = document.getElementById("span3");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");

var allPokemon;

fetch("pokemon.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (allPokemon = strData.split(/\r?\n/)));

button1.addEventListener("click", showPokemon);
button2.addEventListener("click", showTeam);
button3.addEventListener("click", bestPokemon);
input1.addEventListener("change", showLetter);
input2.addEventListener("change", showCount);

function capitalize(word) {
  return (
    word.charAt(0).toUpperCase() + word.slice(1, word.length).toLowerCase()
  );
}

function showPokemon() {
  let randIndex = Math.floor(Math.random() * allPokemon.length);
  span1.innerHTML = capitalize(allPokemon[randIndex]);
}

function showTeam() {
  span2.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    let randIndex = Math.floor(Math.random() * allPokemon.length);
    span2.innerHTML += capitalize(allPokemon[randIndex]) + "<br></br>";
  }
}

function bestPokemon() {
  span3.innerHTML = "Mudkip";
}

function showLetter() {
  var letter = input1.value;
  input1.value = "";
  div1.innerHTML = "";
  for (let i = 0; i < allPokemon.length; i++) {
    let currentPokemon = allPokemon[i]; // e.g. "pikachu"
    let firstLetter = currentPokemon.charAt(0);
    if (firstLetter == letter) {
      div1.innerHTML += capitalize(allPokemon[i]) + "<br></br>";
    }
  }
}

function showCount() {
  var letterCount = input2.value;
  input2.value = "";
  div2.innerHTML = "";
  for (let i = 0; i < allPokemon.length; i++) {
    let currentPokemon = allPokemon[i];
    let pokeCount = currentPokemon.length;
    if (pokeCount == letterCount) {
      div2.innerHTML += capitalize(allPokemon[i]) + "<br></br>";
    }
  }
}
