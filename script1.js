// List of possible colors
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F4D03F", "#8E44AD", "#1ABC9C"];

// HTML elements
const colorBox = document.getElementById("colorBox");
const colorOptionsDiv = document.getElementById("colorOptions");
const gameStatus = document.getElementById("gameStatus");
const scoreDisplay = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");

let score = 0;
let targetColor;

// Function to start a new game
function newGame() {
    // Randomly select target color
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Update the colorBox with a neutral background and a message
    colorBox.style.backgroundColor = "#fff";  // Neutral background
    colorBox.textContent = "Guess the color!";  // Display a message instead of the color
    
    // Clear the status message
    gameStatus.textContent = '';
    
    // Reset the color options
    colorOptionsDiv.innerHTML = '';

    // Create color options dynamically
    const shuffledColors = shuffle(colors.slice());  // Clone and shuffle the colors
    shuffledColors.forEach(color => {
        const colorButton = document.createElement("button");
        colorButton.style.backgroundColor = color;
        colorButton.setAttribute("data-testid", "colorOption");
        colorButton.onclick = () => checkAnswer(color);
        colorOptionsDiv.appendChild(colorButton);
    });
}

// Shuffle function to randomize options
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
    }
    return arr;
}

// Check if the clicked color matches the target color
function checkAnswer(selectedColor) {
    if (selectedColor === targetColor) {
        score++;
        gameStatus.textContent = "Correct!";
        gameStatus.style.color = "green";
    } else {
        gameStatus.textContent = "Wrong!";
        gameStatus.style.color = "red";
    }

    // Update the score
    scoreDisplay.textContent = `Score: ${score}`;

    // Show the result briefly, then start a new game
    setTimeout(newGame, 1000);  // 1 second delay to show result before new game
}

// Initialize the game
newGame();

// New Game Button functionality
newGameButton.onclick = newGame;
