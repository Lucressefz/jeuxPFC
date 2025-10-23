// Sélection des éléments
const playerChoiceSpan = document.getElementById("player-choice");
const computerChoiceSpan = document.getElementById("computer-choice");
const resultSpan = document.getElementById("result");
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const totalScoreSpan = document.getElementById("score");
const resetButton = document.getElementById("reset");
const choicesButtons = document.querySelectorAll(".choice");

// initialisation des scores
let playerScore = 0;
let computerScore = 0;
let totalScore = 0;

// Fonction qui génère un choix aléatoire pour l'ordinateur
function getComputerChoice() {
    const choices = ["pierre", "feuille", "ciseaux"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Fonction pour déterminer le résultat
function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Vous êtes à égalité";
    }
    if (
        (playerChoice === "pierre" && computerChoice === "ciseaux") ||
        (playerChoice === "feuille" && computerChoice === "pierre") ||
        (playerChoice === "ciseaux" && computerChoice === "feuille")
    ) {
        return "Vous avez gagné";
    }
    return "Vous avez perdu";
}

// Fonction pour mettre à jour les scores
function updateScores(result) {
    if (result === "Vous avez gagné") {
        playerScore++;
    } else if (result === "Vous avez perdu") {
        computerScore++;
    }
    totalScore = playerScore - computerScore;

    // Mise à jour des scores 
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    totalScoreSpan.textContent = totalScore;
}

// Fonction pour gérer le choix du joueur
function handlePlayerChoice(event) {
    const playerChoice = event.currentTarget.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);

    // Mise à jour des choix et du résultat 
    playerChoiceSpan.textContent = playerChoice;
    computerChoiceSpan.textContent = computerChoice;
    resultSpan.textContent = result;

    // Mise à jour des scores
    updateScores(result);
}

// Ajout des écouteurs d'événements sur les boutons de choix
choicesButtons.forEach(button => {
    button.addEventListener("click", handlePlayerChoice);
});


