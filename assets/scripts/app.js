const  defaultResult = 0;
let currentResult = defaultResult;

function addNumbers(num1, num2){
  const result = num1 + num2;
//   alert(`The result is ${result}`);
  return result
}

const additionResult = addNumbers(1,5);

currentResult = additionResult;

// i can use string concatenation like pyhton
// let calculationDescription = '('+  defaultResult + '+ 10) * 3 / 2 - 1';

// I also can use  Dolar Signal and curly braces and back-ticks (usando crase), or breaking lines 
let calculationDescription = `( ${defaultResult} + 10) * 3 / 2 - 1`;



outputResult(currentResult,calculationDescription);

