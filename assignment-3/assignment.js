// let variable = true;
// let i = 0;
// while (variable){
//     console.log(i);
//     const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
//     if(randomNumber > 0.7){
//         alert(`the number ${randomNumber} is grater than 0.7`);
//         variable = false;
//     }
//     i++;
// }


let numbers = [1,3,5,7,9];
// j = 0;
for (const anyNumber of numbers){
    console.log(anyNumber);
    //  j++;

}

/* for (let i = numbers.length; i > 0; i--){
    console.log(numbers[i-1]);
} */
/* 
let variable = true;
let i = 0;
while(variable){
    console.log(i);
    const randomNumber = Math.random(); 
    const randomNumber2 = Math.random(); 

    if((randomNumber > 0.7 && randomNumber2 > 0.7) || (randomNumber <= 0.2 || randomNumber2 <= 0.2) ){
        alert(`both numbers are bigger than 0.7. The first random number is ${randomNumber}, the second random number is ${randomNumber2} `);
        variable = false;
    }else if(randomNumber <= 0.2 || randomNumber2 <= 0.2){
        alert(`the first random number is ${randomNumber}, the second random number is ${randomNumber2} `);
        variable = false;
    }

    i++;
} */