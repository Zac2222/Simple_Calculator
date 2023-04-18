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
let firstNumber = '';
let secondNumber = '';
let set = false;
let divideSet = false;
let multiplySet = false;
let subtractSet = false;
let addSet = false;
let answer;
let total = '';
let total2 = '';


zero.addEventListener('click', function(e){
    if (set)
    {
        secondNumber += '0';
        total2 = parseInt(secondNumber);
        numberText.value = total2;
    }
    else
    {
        firstNumber += '0';
        total = parseInt(firstNumber);
        numberText.value = total;
    }
    
    
});
one.addEventListener('click', function(e){
    if (set)
    {
        secondNumber += '1';
        total2 = parseInt(secondNumber);
        numberText.value = total2;
    }
    else
    {
        firstNumber += '1';
        total = parseInt(firstNumber);
        numberText.value = total;
    }
    
    
});
two.addEventListener('click', function(e){
    if (set)
    {
        secondNumber += '2';
        total2 = parseInt(secondNumber);
        numberText.value = total2;
    }
    else
    {
        firstNumber += '2';
        total = parseInt(firstNumber);
        numberText.value = total;
    }

});
three.addEventListener('click', function(e){
    if (set)
    {
        secondNumber += '3';
        total2 = parseInt(secondNumber);
        numberText.value = total2;
    }
    else
    {
        firstNumber += '3';
        total = parseInt(firstNumber);
        numberText.value = total;
    }
   

});
four.addEventListener('click', function(e){
    if (set)
    {
        secondNumber += '4';
        total2 = parseInt(secondNumber);
        numberText.value = total2;
    }
    else
    {
        firstNumber += '4';
        total = parseInt(firstNumber);
        numberText.value = total;
    }
  

});
five.addEventListener('click', function(e){
    if (set)
    {
        secondNumber += '5';
        total2 = parseInt(secondNumber);
        numberText.value = total2;
    }
    else
    {
        firstNumber += '5';
        total = parseInt(firstNumber);
        numberText.value = total;
    }

});
six.addEventListener('click', function(e){
    if (set)
    {
        secondNumber += '6';
        total2 = parseInt(secondNumber);
        numberText.value = total2;
    }
    else
    {
        firstNumber += '6';
        total = parseInt(firstNumber);
        numberText.value = total;
    }
    

});
seven.addEventListener('click', function(e){
    if (set)
    {
        secondNumber += '7';
        total2 = parseInt(secondNumber);
        numberText.value = total2;
    }
    else
    {
        firstNumber += '7';
        total = parseInt(firstNumber);
        numberText.value = total;
    }
    


});
eight.addEventListener('click', function(e){
    if (set)
    {
        secondNumber += '8';
        total2 = parseInt(secondNumber);
        numberText.value = total2;
    }
    else
    {
        firstNumber += '8';
        total = parseInt(firstNumber);
        numberText.value = total;
    }



});
nine.addEventListener('click', function(e){
    if (set)
    {
        secondNumber += '9';
        total2 = parseInt(secondNumber);
        numberText.value = total2;
    }
    else
    {
        firstNumber += '9';
        total = parseInt(firstNumber);
        numberText.value = total;
    }
    

});

clear.addEventListener('click', function(e){
    firstNumber = '';
    secondNumber = '';
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
        numberText.value = total / total2;
    }
    else if (multiplySet)
    {
        numberText.value = total * total2;
    }
    else if (subtractSet)
    {
        numberText.value = total - total2;
    }
    else if (addSet)
    {
        numberText.value = parseFloat(firstNumber) + parseFloat(secondNumber);
    }
    firstNumber = '';
    secondNumber = '';
    set = false;
    addSet = false;
    divideSet = false;
    multiplySet = false;
    subtractSet = false;

});

