let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > k");
const rock_div = document.getElementById("t");
const paper_div = document.getElementById("k");
const scissors_div = document.getElementById("m");

function getComputerChoice() {
    const choices = ['t', 'k', 'm'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "t") return "taş";
    if (letter === "k") return "kağıt";
    return "makas";
}


function win(userChoice, computerChoice) {
    const smallUserWord = "kullanici".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} [ Kazandın! 🔥 ]`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => 
        userChoice_div.classList.remove('green-glow')
    , 300);
}




function lose(userChoice, computerChoice) {
    const smallUserWord = "kullanici".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} [ Kaybettin... ☠ ]`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => 
        userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "kullanici".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord} [berabere kaldın... 🏁 ]`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() =>
        userChoice_div.classList.remove('gray-glow')
    , 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "tm":
        case "kt":
        case "mk":
            win(userChoice, computerChoice);
            break;
        case "tk":
        case "km":
        case "mt":
            lose(userChoice, computerChoice);
            break;
        case "tt":
        case "kk":
        case "mm":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click',() => game("t"));
    paper_div.addEventListener('click',() => game("k"));
    scissors_div.addEventListener('click',() => game("m"));   
}

main();