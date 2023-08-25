const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';


let gameIsRunning = false;

const getPlayerChoice = function(){
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`,'').toUpperCase();
    if(selection !== ROCK && selection !== PAPER && selection !== SCISSORS){
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE}`) ;
        return DEFAULT_USER_CHOICE;
    } else{
        // console.log('you lost with your ' + selection);
        return selection;
    } 

}


const getComputerChoice = function(){
    const randomValue = Math.random();
    if(randomValue < 0.34){
        return ROCK;
    }else if (randomValue < 0.67){
        return PAPER;
    }else {
        return SCISSORS;
    }
}

/* const getWinner = function(cChoice, pChoice){
    if(cChoice === pChoice){
        alert('You have a Draw');
        return RESULT_DRAW;
    }else if(
        (cChoice === ROCK && pChoice === PAPER) || 
        (cChoice === PAPER && pChoice === SCISSORS) ||
        (cChoice === SCISSORS && pChoice === ROCK)
    ){
        return RESULT_PLAYER_WINS;
    }else {
        return RESULT_COMPUTER_WINS;
    }
}
 */

//writing the same function 'getWinner' but using arrow function, and ternary expressions
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => 
    cChoice === pChoice ? RESULT_DRAW : (cChoice === ROCK && pChoice === PAPER) || 
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK) ? RESULT_PLAYER_WINS : RESULT_COMPUTER_WINS;

/* 
//with arrow function I can take off the 'curly brackets' and the 'return'
const add = (a, b) => a + b;
const add2 = function(a, b) {
    return a + b;
}
*/


//here I added a anonymous function
startGameBtn.addEventListener('click', function () {
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting..');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let winner;
    if(playerChoice){
        winner = getWinner(computerChoice, playerChoice);
    }else{
        winner = getWinner(computerChoice); //will not break because we should pass 2 arguments
    }

    let message = `You picked ${playerChoice ? playerChoice : DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `;
    if(winner === RESULT_DRAW){
        message = message + 'had a draw.';
    }else if (winner === RESULT_PLAYER_WINS){
        message = message + 'won.';
    }else{
        message = message + 'lost.';
    }
    alert(message);

    gameIsRunning = false;

});

//not realted to the game ------------------------------------------------------------
//Spread Operator '...', is used to copy arrays and object with its values -> {...example}
//using the Spread Operator inside the parameters list, I can send many arguments as I want that will merge into an array "kind of dynamic parameters list "
//they call REST operator
const sumUp = (resultHandler, ...numbers) =>{

    //function inside function - can be used only in this Block Scope
    const validateNumber = (number) =>{
        return isNaN(number) ? 0 : number;
    };

    let sum = 0;
    for(const num of numbers){
        sum += validateNumber(num);
    }
    resultHandler(sum);
}

const showResult = (result) => {
    alert('The result after adding all numbers is: ' + result);
}

sumUp(showResult, 1, 4, 7, 8, 15,22,43,54,123);



//this is a function declaration/Function Statement
/* function startGame() {
    console.log('Gmae is starting..');
} */


// I can assign a function to a variable.
//this is a function Expression
/* const start = function () {
    console.log('Gmae is starting..');
};
 */
//here I am going to reference the variabla instead of the function name
// startGameBtn.addEventListener('click', start);
