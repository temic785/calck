
 var firstInputEl = document.getElementById('firstNumber');
 var lastInputEl = document.getElementById('secondNumber');


 function action(inputAction) {
     console.clear();
     var number1 = Number(firstInputEl.value);
     var number2 = Number(lastInputEl.value)
     if (inputAction === '+') {
         var result = number1 + number2;
     } else if (inputAction === '-') {
         var result = number1 - number2;
     } else if (inputAction === '*') {
         var result = number1 * number2;
         var result = number1 * number2;
     } else if (inputAction === '/') {
         var result = number1 / number2;
     } else {
         console.log('Вы ввели неправильные значения')
     }
     console.log(result)
 }

 function chooseSymbol(eventObject) {
     var clickedElement = eventObject.currentTarget;
     var operation = clickedElement.value;
     action(operation);
 }

 var mas = document.getElementsByClassName('operation-button');

 for (var i = 0; i < mas.length; i++) {
     mas[i].addEventListener('click', chooseSymbol);
 }