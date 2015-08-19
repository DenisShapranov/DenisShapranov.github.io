//Task1
var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};
function DisplayNameMax(obj) {
    var numberMax = 0, nameNumberMax = '';
    for (var name in obj)
    {if (obj[name] > numberMax){
        numberMax = obj[name];
        nameNumberMax = name;
    }}
    return nameNumberMax;
}
alert (DisplayNameMax(tasksCompleted));

//Task2
var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};
function multiplyNumeric (imageObject){
    imageObject.width *=2;
    imageObject.height *=2;
    return imageObject;
}
console.log(multiplyNumeric (image));

//Task3
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
} // chek numeric function

var arrayNumbers = [], number1, str1, numberSum = 0;
do {
    str1 = prompt('Enter number','');//enter number for add array
    number1 = +str1; //enter number for add array
    if (isNumeric(number1) && (str1 !== '') && (str1 !== ' ') && str1 !== null) {
        arrayNumbers.push(number1);
       // numberSum += number1;
    } //add array if number
} while (isNumeric(number1) && (str1 !== '') && (str1 !== ' ') && str1 !== null); //repeat if enter number
console.log(arrayNumbers);
//console.log(numberSum);
for(var i = 0; i < arrayNumbers.length; i++)
    numberSum += arrayNumbers[i];
console.log(numberSum);

