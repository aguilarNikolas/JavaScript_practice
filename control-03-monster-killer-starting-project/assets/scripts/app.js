const ATTACK_VALUE = 10;  // for better communication, global variables are in Cpital letters
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER'; 




let battleLog = [];
let lastLoggedEntry;  

function getMaxLifeValues(){
    const enteredValue = prompt('Maximum life for you and the monster.', '100');
    const parsedValue = parseInt(enteredValue);
    if(isNaN(parsedValue) || parsedValue <= 0){
        throw {message: 'Invalid user input, not a number'};
    }
    return parsedValue;
}

let chosenMaxLife;

try {
    chosenMaxLife = getMaxLifeValues();
    
} catch (error) {
    console.log(error);
    chosenMaxLife = 100;   
    alert('You entered something wrong, default value of 100 was used.'); 
} 


let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(ev, val, monsterHealth, playerHealth){
    let logEntry;


    switch (ev){
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry = {
                event: ev,
                value: val,
                target: 'MONSTER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            };
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry = {
                event: ev,
                value: val,
                target: 'MONSTER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            };
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry = {
                event: ev,
                value: val,
                target: 'PLAYER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            };
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry = {
                event: ev,
                value: val,
                target: 'PLAYER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            };
            break;
        case LOG_EVENT_GAME_OVER:
            logEntry = {
                event: ev,
                value: val,
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            };
            break;
        default:
            logEntry = {};
    }

    // if(ev === LOG_EVENT_PLAYER_ATTACK){
    //     logEntry = {
    //         event: ev,
    //         value: val,
    //         target: 'MONSTER',
    //         finalMonsterHealth: monsterHealth,
    //         finalPlayerHealth: playerHealth
    //     };
    // }else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK){
    //     logEntry = {
    //         event: ev,
    //         value: val,
    //         target: 'MONSTER',
    //         finalMonsterHealth: monsterHealth,
    //         finalPlayerHealth: playerHealth
    //     };
    // } else if (ev === LOG_EVENT_MONSTER_ATTACK){
    //     logEntry = {
    //         event: ev,
    //         value: val,
    //         target: 'PLAYER',
    //         finalMonsterHealth: monsterHealth,
    //         finalPlayerHealth: playerHealth
    //     };
    // }else if (ev === LOG_EVENT_PLAYER_HEAL){
    //     logEntry = {
    //         event: ev,
    //         value: val,
    //         target: 'PLAYER',
    //         finalMonsterHealth: monsterHealth,
    //         finalPlayerHealth: playerHealth
    //     };
    // }else if(ev === LOG_EVENT_GAME_OVER){
    //     logEntry = {
    //         event: ev,
    //         value: val,
    //         finalMonsterHealth: monsterHealth,
    //         finalPlayerHealth: playerHealth
    //     };
    // }
    battleLog.push(logEntry);
}

function reset(){
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound(){
    const initialPlayerHealth = currentPlayerHealth; 
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeToLog(
        LOG_EVENT_MONSTER_ATTACK, 
        playerDamage, 
        currentMonsterHealth, 
        currentPlayerHealth
    );

    if (currentPlayerHealth <= 0 && hasBonusLife ) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        alert('You would be dead but the bonus life saved you!');
        setPlayerHealth(initialPlayerHealth);
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert('You won!');
        writeToLog(
            LOG_EVENT_GAME_OVER, 
            'PLAYER WON', 
            currentMonsterHealth, 
            currentPlayerHealth
        );
    }else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0){
        alert('You lost!');
        writeToLog(
            LOG_EVENT_GAME_OVER, 
            'MONSTER WON', 
            currentMonsterHealth, 
            currentPlayerHealth
        );
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
        alert('You have a draw!');
        writeToLog(
            LOG_EVENT_GAME_OVER, 
            'A DRAW', 
            currentMonsterHealth, 
            currentPlayerHealth
        );
    }

    if(currentMonsterHealth <= 0 || currentPlayerHealth <= 0){
        reset();
    }

}

function attackMonster(mode){
    //here I am going to use Ternary Expressions
    const maxDamage =  mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE; 
    const logEvent = mode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;
    // if(mode === MODE_ATTACK) {
    //     maxDamage = ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_ATTACK;
    // } else if (mode === MODE_STRONG_ATTACK){
    //     maxDamage = STRONG_ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    // }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    writeToLog(
        logEvent, 
        damage, 
        currentMonsterHealth, 
        currentPlayerHealth
    );
    endRound();
}

function attackHandler(){
    attackMonster(MODE_ATTACK);
}

function strongAttackHandler(){
    attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler(){
    let healValue;
    if(currentPlayerHealth >= (chosenMaxLife - HEAL_VALUE)){
        alert("You can't heal more than your max initial health")
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE
    }
    increasePlayerHealth(healValue)
    currentPlayerHealth += healValue;
    writeToLog(
        LOG_EVENT_PLAYER_HEAL, 
        healValue, 
        currentMonsterHealth, 
        currentPlayerHealth
    );
    endRound();

}

function printLogHandler(){
    // commom for loop
    for (let i=0 ; i < 3 ; i++) {
        console.log('-----------');
    }

    /* let j = 0;
    while (j < 3) {
        console.log(j);
        j++;
    }
    */
    // let k = 0;

    //you can 'label statements' loops, and when you have nested loops you can 'break' outer loops
  /*   outerWhile: do {
        console.log('outer', k);
        innerFor: for(z = 0; z < 5; z++){
            if (z === 3) {
                break outerWhile;                
            }
            console.log('inner',z);
        }
        k++;
    } while (k < 3);  */


    // for (let i=0 ; i < battleLog.length; i++){
    //     console.log(battleLog[i]);
    // }
    // console.log(battleLog);
    
    //for-of loop (used to itereate arrays)
    for(const logEntry of battleLog){
        console.log(logEntry);
    }

    // let i = 0;
    // for(const logEntry of battleLog){

    //     if((!lastLoggedEntry && lastLoggedEntry !== 0) || lastLoggedEntry < i){
    //         console.log(`#${i}`);
    //     //for-in loop (used to itereate objects)
    //         for (const key in logEntry){
    //             console.log(`${key} => ${logEntry[key]}`); //access to the values stored in the keys of an object
    //         }
    //         lastLoggedEntry = i;
    //         break;
    //     }
    //     i++;
    // }

    
}


attackBtn.addEventListener('click', attackHandler);

strongAttackBtn.addEventListener('click', strongAttackHandler);

healBtn.addEventListener('click', healPlayerHandler);

logBtn.addEventListener('click', printLogHandler);