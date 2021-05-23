// Random text variables
let randomText=[];

// Text variables
let correctWords = 0;
let currentText=[];
let typedText=[];
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

ParseText();

// Parse the text from 1-1000.txt
function ParseText(){
    fetch("/Web Applications/typer/1-1000.txt")
    .then(res => res.text())
    .then(text => text.toString())
    .then(str => {
        randomText = str.split("\n")
        GenerateRandomText();
    })
}

// Generates random text from 1-1000.txt
function GenerateRandomText(){
    let area = document.getElementById("text-area");
    for(var i = 0; i < 5; i++){
        var rand = Math.floor(Math.random() * randomText.length);
        currentText.push(randomText[rand]);
    }
    GenerateHTML();
}

function GenerateRandomQuote(){
    fetch("/Web Applications/typer/quotes.json")
    .then(res => res.json())
    .then(quotes => {
        var rand = Math.floor(Math.random() * quotes.quotes.length);
        console.log(quotes.quotes[rand].quote)
    })
}

function OnKeyDown(){
    // Get input value
    var text = input.value;

    // Start timer
    if (startTime != 0){
        startTime = performance.now();
    }

    if (canType){

        // Only do things if not just pressing space 
        if (text.length<2 && text.charAt(0) == ' '){
            input.value = "";
            text = ""
        }

        // Check if the word is currently wrong
        for (var i = 0; i < text.length; i++){
            if (text.charAt(i) != currentText[typedText.length].charAt(i)){
                textArea.childNodes[typedText.length+1].className = "typing-red-under";
                break;
            }   else {
                textArea.childNodes[typedText.length+1].className = "typing-selected";
            }
        }
        
        // Check if a space has been inputed, and to set next word if so
        for (var i = 0; i < text.length; i++){
            if (text.charAt(i) == ' '){
                NextWord();
            }
        }
        
    }

    // If there is a space, wipe text
    for (var i = 0; i < text.length; i++){
        if (text.charAt(i) == ' '){
            input.value = "";
        }
    }
    
}

function NextWord(){
    typedText.push(input.value);

    // Check if typed right
    if (typedText[typedText.length-1] === currentText[typedText.length-1]+" "){
        textArea.childNodes[typedText.length].className = "typing-correct";
        correctWords++;
    }   else {
        textArea.childNodes[typedText.length].className = "typing-error";
    }

    // Check if at end
    if (typedText.length >= currentText.length){
        canType = false;

        // Set time
        var elapsedTime = (performance.now() - startTime)/1000;
        timeDisplay.textContent = "time: "+Math.round(elapsedTime*100)/100 + "s"
    }   else {
        textArea.childNodes[typedText.length+1].className = "typing-selected";
    }
}

function GenerateHTML(){
    for(var i = 0; i < currentText.length; i++){
        var word = document.createElement("div")
        word.textContent = currentText[i];
        word.className = "typing-text";
        textArea.appendChild(word);
    }
}

function startTimer(){

}



