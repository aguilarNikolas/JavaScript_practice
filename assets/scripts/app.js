const  defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;

// i can use string concatenation like pyhton
// let calculationDescription = '('+  defaultResult + '+ 10) * 3 / 2 - 1';

// I also can use  Dolar Signal and curly braces and back-ticks (usando crase), or breaking lines 
let calculationDescription = `( ${defaultResult} + 10) * 3 / 2 - 1`;



outputResult(currentResult,calculationDescription);