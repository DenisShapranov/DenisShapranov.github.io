function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
} // chek numeric function

// Task 1 Fibonacci numbers

var number1; //
function fibonachiNumb(numb) {
    var fibNum;
    switch (numb) {
        case 1:
        case 2:
            fibNum = 1;
            break; //if numb = 1 or 2  return 1
        default:
            fibNum = fibonachiNumb(numb - 1) + fibonachiNumb(numb - 2); //calculate fibonachi number by recursion
    }
    return fibNum;
}
function fibonachiNumbV1 (n) {
    var a = 1, b = 0, x;
    for (i = 0; i < n; i++) {
        x = a + b;
        a = b;
        b = x;
    }
    return b;
} //calculate fibonachi number by cicle

do {
    number1 = +prompt('Enter number for Fibonachi solve', '1'); //enter number for solve
} while (!isNumeric(number1) || (number1 <= 0)); //repeat if number incorrect

//alert ('Number Fibonacci of ' + number1 + ' = ' + fibonachiNumb(number1)); //Output Fibonachi number (hangs when  number1 > 40 )
alert ('Number Fibonacci of ' + number1 + ' = ' + fibonachiNumbV1(number1)); //Output Fibonachi number

// Task2

function checkSpam (strEnter) {
    return ((strEnter.toLowerCase().indexOf("sex") >= 0) || (strEnter.toLowerCase().indexOf("spam") >= 0))
        ? true : false;
} // check text spam

console.log(checkSpam('get new Sex videos')); // true
console.log(checkSpam('[SPAM] How to earn fast money?')); // true
console.log(checkSpam('New PSD template')); // false
console.log(checkSpam('klahkvjzk sPaM')); // true

// Task3
var str = prompt ('Enter any text, please',''); //Enter text
function addEllipsis(strEnt) {
    return (strEnt.length >20) ? strEnt.substring(0, 20) + "...": strEnt;
} //check and edit text

console.log(addEllipsis (str));//Output edited text