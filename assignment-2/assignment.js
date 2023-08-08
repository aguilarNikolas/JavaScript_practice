const task3Element = document.getElementById('task-3');

function show(){
    alert('Hey you clicked!');
}

function name(name){
    alert(name);
}

function strinConcat(str1, str2, str3){
    return alert(str1 + str2 + str3)    
}


// show()

// name('babe babe babe ohhh')

task3Element.addEventListener('click', show);


strinConcat('trying ', 'to ', 'learn');