const DEAFULT_PHRASE = 'You forgot to add the phrase to the function';
const EMPTY_STRING = 'This is an empty string';

const sayHello1 = (name, phrase = DEAFULT_PHRASE) =>{
  console.log(phrase +' ' + name);
}

sayHello1('Nikolas','wassup');


const sayHello2 = () =>{
  console.log('Second - Hi ' + 'Nikolas');
}

sayHello2();



const sayHello3 = name =>{
  const phrase = 'Third Hi ' + name;
  return phrase;
}

console.log(sayHello3('Nikolas'));


const checkInput = (callback, ...strings) =>{
  let hasEmptyText = false;

    for(const text of strings){
      if(text === ''){
        hasEmptyText = true;
        break;
      }
    }
    if(!hasEmptyText){
      callback();
    }
  
}

/* const showString = (string)=>{
    alert('You did not entered anything. ' + string);
} */

checkInput(() => {
  console.log('All not empty');
},'helo',12,'12','');

/* function sayHello(name) {
  console.log('Hi ' + name);
}

sayHello();

 */