let divide = document.getElementById('divide')
let multiply = document.getElementById('multiply')
let subtract = document.getElementById('subtract')
let add = document.getElementById('add')
let equals = document.getElementById('equals')
let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')
let six = document.getElementById('six')
let seven = document.getElementById('seven')
let eight = document.getElementById('eight')
let nine = document.getElementById('nine')
let zero = document.getElementById('zero')
let clear = document.getElementById('clear');
let numberText = document.getElementById('numberText')
let firstNumber = 0;
let secondNumber = 0;
let set = false;
let divideSet = false;
let multiplySet = false;
let subtractSet = false;
let addSet = false;
let answer;
let shown = 0;

zero.addEventListener('click', function(e){
    numberText.value = 0;
    if (set)
    {
        secondNumber = 0;
    }
    else
    {
        firstNumber = 0;
    }
    
});
one.addEventListener('click', function(e){
    numberText.value = 1;
    if (set)
    {
        secondNumber = 1;
    }
    else
    {
        firstNumber = 1;
    }
    
});
two.addEventListener('click', function(e){
    numberText.value = 2;
    if (set)
    {
        secondNumber = 2;
    }
    else
    {
        firstNumber = 2;
    }

});
three.addEventListener('click', function(e){
    numberText.value = 3;
    if (set)
    {
        secondNumber = 3;
    }
    else
    {
        firstNumber = 3;
    }

});
four.addEventListener('click', function(e){
    numberText.value = 4;
    if (set)
    {
        secondNumber = 4;
    }
    else
    {
        firstNumber = 4;
    }

});
five.addEventListener('click', function(e){
    numberText.value = 5;
    if (set)
    {
        secondNumber = 5;
    }
    else
    {
        firstNumber = 5;
    }

});
six.addEventListener('click', function(e){
    numberText.value = 6;
    if (set)
    {
        secondNumber = 6;
    }
    else
    {
        firstNumber = 6;
    }

});
seven.addEventListener('click', function(e){
    numberText.value = 7;
    if (set)
    {
        secondNumber = 7;
    }
    else
    {
        firstNumber = 7;
    }


});
eight.addEventListener('click', function(e){
    numberText.value = 8;
    if (set)
    {
        secondNumber = 8;
    }
    else
    {
        firstNumber = 8;
    }


});
nine.addEventListener('click', function(e){
    numberText.value = 9;
    if (set)
    {
        secondNumber = 9;
    }
    else
    {
        firstNumber = 9;
    }

});

clear.addEventListener('click', function(e){
    firstNumber = 0;
    secondNumber = 0;
    set = false;
    addSet = false;
    divideSet = false;
    multiplySet = false;
    subtractSet = false;
    numberText.value = '';
});

divide.addEventListener('click', function(e){
    set = true;
    divideSet = true;
    multiplySet = false;
    subtractSet = false;
    addSet = false;
    numberText.value = '/';
});
multiply.addEventListener('click', function(e){
    set = true;
    multiplySet = true;
    divideSet = false;
    subtractSet = false;
    addSet = false;
    numberText.value = '*';
});
subtract.addEventListener('click', function(e){
    set = true;
    subtractSet = true;
    divideSet = false;
    multiplySet = false;
    addSet = false;
    numberText.value = '-';
});
add.addEventListener('click', function(e){
    set = true;
    addSet = true;
    divideSet = false;
    multiplySet = false;
    subtractSet = false;
    numberText.value = '+';
});
equals.addEventListener('click', function(e){
    if(divideSet)
    {
        numberText.value = firstNumber / secondNumber;
    }
    else if (multiplySet)
    {
        numberText.value = firstNumber * secondNumber;
    }
    else if (subtractSet)
    {
        numberText.value = firstNumber - secondNumber;
    }
    else if (addSet)
    {
        numberText.value = firstNumber + secondNumber;
    }
    firstNumber = 0;
    secondNumber = 0;
    set = false;
    addSet = false;
    divideSet = false;
    multiplySet = false;
    subtractSet = false;

});

