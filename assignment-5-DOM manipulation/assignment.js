const task1Query = document.querySelector('#task-1');

const task1SecondQuery = document.getElementById('task-1');

task1Query.style.backgroundColor = 'black';
task1Query.style.color = 'white';

const title1 = document.querySelector('title');

// or a different way
const title2 =  document.head.querySelector('title')
title2.textContent = 'Assignment - Solved!';

// title1.textContent = 'Assignment - Solved!';


const h1 = document.querySelector('h1');

h1.textContent = 'Assignment - Solved!';
