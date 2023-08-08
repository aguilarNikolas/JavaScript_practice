const  defaultResult = 0;
let currentResult = defaultResult;

function add(){
  const calcDescription = `${currentResult} + ${userInput.value}`
  // parseInt will convert the string to a int or use a plus signal -> +userInput.value
  // parseFloat will convert the string to a float
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult,calcDescription);
//   alert(`The result is ${result}`);
}

// const additionResult = addNumbers(1,5);

// currentResult = additionResult;

// i can use string concatenation like pyhton
// let calculationDescription = '('+  defaultResult + '+ 10) * 3 / 2 - 1';

// I also can use  Dolar Signal and curly braces and back-ticks (usando crase), or breaking lines 
// let calculationDescription = `( ${defaultResult} + 10) * 3 / 2 - 1`;


addBtn.addEventListener('click', add);



