// Variables
let currentMode = 0;
let currentWordNumber = 25;

// Random text variables
let randomText = [];
let quotes = [];

// Text variables
let correctWords = 0;
let currentText = [];
let typedText = [];
let currentWordIndex = 0;
let canType = true;

// Speed Variables
let elapsedTime;
let typedWords;
let wpm;
let wordsCorrect;
let startTime = 0;

// HTML References
let wpmDisplay = document.getElementById("wpm");
let accuracyDisplay = document.getElementById("accuracy");
let timeDisplay = document.getElementById("time");
let textArea = document.getElementById("text-area");
let input = document.getElementById("text-input");
let wordsButton = document.getElementById("words");
let quotesButton = document.getElementById("quotes");
let numberButtons = [
  document.getElementById("15"),
  document.getElementById("25"),
  document.getElementById("50"),
  document.getElementById("100"),
];
ParseText();

// Parse the text from 1-1000.txt
function ParseText() {
  fetch("./1-1000.txt", { mode: "no-cors" })
    .then((res) => res.text())
    .then((text) => text.toString())
    .then((str) => {
      randomText = str.split("\n");
      GenerateRandomText();
    });

  fetch("./quotes.json", { mode: "no-cors" })
    .then((res) => res.json())
    .then((quoteJSON) => {
      for (var i = 0; i < quoteJSON.quotes.length; i++) {
        quotes.push(quoteJSON.quotes[i].quote.toString());
      }
    });
}

// Generates random text from 1-1000.txt
function GenerateRandomText() {
  let area = document.getElementById("text-area");
  for (var i = 0; i < currentWordNumber; i++) {
    var rand = Math.floor(Math.random() * randomText.length);
    currentText.push(randomText[rand]);
  }
  GenerateHTML();
}

function GenerateRandomQuote() {
  var rand = Math.floor(Math.random() * quotes.length);
  currentText = quotes[rand].toString().split(" ");
  GenerateHTML();
}

function OnKeyDown() {
  // Get input value
  var text = input.value;

  // Start timer
  if (startTime == 0) {
    startTime = performance.now();
  }
  if (canType) {
    // Only do things if not just pressing space
    if (text.length < 2 && text.charAt(0) == " ") {
      input.value = "";
      text = "";
    }

    // Check if the word is currently wrong
    for (var i = 0; i < text.length; i++) {
      if (text.charAt(i) != currentText[typedText.length].charAt(i)) {
        textArea.childNodes[typedText.length + 1].className =
          "typing-red-under";
        break;
      } else {
        textArea.childNodes[typedText.length + 1].className = "typing-selected";
      }
    }

    // Check if a space has been inputed, and to set next word if so
    for (var i = 0; i < text.length; i++) {
      if (text.charAt(i) == " ") {
        NextWord();
      }
    }

    // Check to see if we are on the last word and if it is right
    if (
      currentText.length - 1 == typedText.length &&
      text == currentText[typedText.length]
    ) {
      input.value = input.value + " ";
      NextWord();
    }
  }

  // If there is a space, wipe text
  for (var i = 0; i < text.length; i++) {
    if (text.charAt(i) == " ") {
      input.value = "";
    }
  }
}

function NextWord() {
  typedText.push(input.value);
  // Check if typed right
  if (
    typedText[typedText.length - 1] ===
    currentText[typedText.length - 1] + " "
  ) {
    textArea.childNodes[typedText.length].className = "typing-correct";
    correctWords++;
  } else {
    textArea.childNodes[typedText.length].className = "typing-error";
  }

  // Check if at end
  if (typedText.length >= currentText.length) {
    canType = false;

    // Set time
    var elapsedTime = (performance.now() - startTime) / 1000;
    wpmDisplay.textContent =
      "WPM: " + Math.round(correctWords / (elapsedTime / 60));
    accuracyDisplay.textContent =
      "Accuracy: " + Math.round((correctWords / typedText.length) * 100);
    timeDisplay.textContent = "Time: " + Math.round(elapsedTime) + "s";
  } else {
    textArea.childNodes[typedText.length + 1].className = "typing-selected";
  }
}

function GenerateHTML() {
  for (var i = 0; i < currentText.length; i++) {
    var word = document.createElement("div");
    word.textContent = currentText[i];
    word.className = "typing-text";
    textArea.appendChild(word);
  }
}

function Next() {
  // Reset Variables
  correctWords = 0;
  currentText = [];
  typedText = [];
  canType = true;
  currentWordIndex = 0;
  elapsedTime = 0;
  typedWords = 0;
  wpm = 0;
  wordsCorrect = 0;
  startTime = 0;

  // Set new text
  textArea.innerHTML = " ";
  if (currentMode == 0) {
    GenerateRandomText();
  } else {
    GenerateRandomQuote();
  }

  input.value = "";
  input.focus();
}

function ChangeMode(num) {
  currentMode = num;
  switch (num) {
    case 0:
      wordsButton.className = "menu-bar-text-selected";
      quotesButton.className = "menu-bar-text";
      document.getElementById("changeWordNumberBar").style.opacity = 1;
      break;
    case 1:
      wordsButton.className = "menu-bar-text";
      quotesButton.className = "menu-bar-text-selected";
      document.getElementById("changeWordNumberBar").style.opacity = 0;
      break;
  }
  Next();
}

function ChangeWordNumber(num) {
  if (currentMode != 1) {
    currentWordNumber = num;
    for (var i = 0; i < numberButtons.length; i++) {
      if (numberButtons[i].id != num.toString()) {
        numberButtons[i].className = "menu-bar-text";
      } else {
        numberButtons[i].className = "menu-bar-text-selected";
      }
    }
    Next();
  }
}

function ToggleQuoteSuggestion() {
  if (document.getElementById("suggest").className == "bottom-text") {
    document.getElementById("suggest").className = "bottom-text-show";
    document.getElementById("suggestion-area").className =
      "suggestion-area-show";
  } else {
    document.getElementById("suggest").className = "bottom-text";
    document.getElementById("suggestion-area").className = "suggestion-area";
  }
}

function SuggestQuote() {
  var input = document.getElementById("suggestionInput");
}
