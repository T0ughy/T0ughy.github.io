let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user_score");
const computerScore_span=document.getElementById("computer_score");
const scoreBoard_div=document.getElementById(".scoreboard");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("TheRock");
const paper_div=document.getElementById("Ben");
const scissors_div=document.getElementById("Ibrakadabra");
const restart_button=document.getElementById("restartButton");

function computersChoice() {
    const choices=["Rock", "Ben", "Ibra"];
    const randNum=Math.floor(Math.random()*3);
    return choices[randNum];
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML=userScore;
    switch(user+computer) {
        case "RockIbra":
            result_p.innerHTML="The battle of the giants! And the winner is The Rock! He is standing still. You won that one!";
            break;
        case "BenRock":
            result_p.innerHTML="You made a mummy from The Rock, You won that one!";
            break;
        default:
            result_p.innerHTML="I can beat you in any way! Not just on paper.";
    }
}

function draw(user, computer) {
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    switch(user+computer) {
        case "RockRock":
            result_p.innerHTML="No way... I thought there is only one Rock, but You made another with just your fingers. Unfortunately it's a draw.";
            break;
        case "BenBen":
            result_p.innerHTML="I see, You also want to gather toilet papers for yourself, I can't make You win, neither lose.";
            break;
        default:
            result_p.innerHTML="I like your personality! - Zlatan Ibrahimovic";
    }
}

function lose(user, computer) {
    computerScore++;
    computerScore_span.innerHTML=computerScore;
    switch(user+computer) {
        case "RockBen":
            result_p.innerHTML="You lost, but You will be a very good mummy, II. Monturocktem!";
            break;
        case "BenIbra":
            result_p.innerHTML="Zlatan asks You if he had to tell that again. You lost.";
            break;
        default:
            result_p.innerHTML="The battle of the giants! And the winner is The Rock! He is standing still. You lost that one.";
    }
}

function gameOn(usersChoice) {
    const compChoice=computersChoice();
    switch(usersChoice+compChoice) {
        case "RockIbra":
        case "BenRock":
        case "IbraBen":
            win(usersChoice, compChoice);
            break;
        case "RockBen":
        case "BenIbra":
        case "IbraRock":
            lose(usersChoice, compChoice);
            break;
        default:
            draw(usersChoice, compChoice);
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        gameOn("Rock");
    })
    paper_div.addEventListener('click', function() {
        gameOn("Ben");
    })
    scissors_div.addEventListener('click', function() {
        gameOn("Ibra");
    })
    restart_button.addEventListener('click', function() {
        userScore=0;
        computerScore=0;
        userScore_span.innerHTML=userScore;
        computerScore_span.innerHTML=computerScore;
        result_p.innerHTML="Welcome to the game! This is the simplest game on the world, so just begin!";
    })
}

main();