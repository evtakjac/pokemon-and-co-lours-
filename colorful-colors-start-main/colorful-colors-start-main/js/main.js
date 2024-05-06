// Colorful Colors Start Code

// Load Colors from Text File
let colors;
fetch("web-colors.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (colors = strData.split(/\r?\n/)));

// Output Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "all") {
    displayAll();
  } else if (selection === "start-letter") {
    displayStartingLetter();
  } else if (selection === "random") {
    randomColor();
  }
}

// Menu Functions
function displayAll() {
  outputEl.innerHTML = "";
  for (i = 0; i < colors.length; i++) {
    outputEl.innerHTML += `<div style="background-color: ${colors[i]}; "> ${colors[i]} </div>`;
  }
}

function displayStartingLetter() {
  let startLetter = prompt("Enter a starting letter: ");
  let count = 0;
  outputEl.innerHTML = "";
  for (i = 0; i < colors.length; i++) {
    if (colors[i][0] == startLetter) {
      count++;
      outputEl.innerHTML += `<div style="background-color: ${colors[i]}; "> ${colors[i]} </div>`;
    }
  }
  outputEl.innerHTML += `<p>Number of Colors: ${count}</p>`;
}

function randomColor() {
  let randColor = randomElement(colors);
  outputEl.innerHTML += `<div style="background-color: ${randColor}; "> ${randColor} </div>`;
}
