const  defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; // array to log operations


// gets input from input field
function gerUserNumberInput(){
  return parseInt(userInput.value);
}

// generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult,calcDescription); //from vendor file
}

function writeToLog(operationIdentifier,prevResult,operationNumber, newResult) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry); //push function to add something into the array
  console.log(logEntry.operation);
  console.log(logEntries);
}


function add(){
  const enteredNumber = gerUserNumberInput();
  const initialResult = currentResult;
  // const calcDescription = `${currentResult} + ${enteredNumber}`
  // parseInt will convert the string to a int or use a plus signal -> +userInput.value
  // parseFloat will convert the string to a float
  currentResult = currentResult + enteredNumber;
  // outputResult(currentResult,calcDescription);
//   alert(`The result is ${result}`);
  createAndWriteOutput('+', initialResult, enteredNumber);
  writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = gerUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
  // console.log('used a subtract function');
  writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = gerUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);

}

function divide() {
  const enteredNumber = gerUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}



// const additionResult = addNumbers(1,5);

// currentResult = additionResult;

// i can use string concatenation like pyhton
// let calculationDescription = '('+  defaultResult + '+ 10) * 3 / 2 - 1';

// I also can use  Dolar Signal and curly braces and back-ticks (usando crase), or breaking lines 
// let calculationDescription = `( ${defaultResult} + 10) * 3 / 2 - 1`;


addBtn.addEventListener('click', add);

subtractBtn.addEventListener('click', subtract);

multiplyBtn.addEventListener('click', multiply);

divideBtn.addEventListener('click', divide);
