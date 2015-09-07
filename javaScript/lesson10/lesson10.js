// task1
var obj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov'
};

obj.extractNumber = function(){
   var arr = [];
    for (var key in obj){
   if (typeof obj[key] == "number"){
       arr.push(obj[key]);
   }
       }
   return arr;
}
obj.extractString = function(){
    var arr =[];
    for (var key in obj){
        if (typeof obj[key] == "string"){
            arr.push(obj[key]);
        }
    }
    return arr;
}
    var ages = obj.extractNumber();
    var names =obj.extractString();
    console.log(ages);
    console.log(names);
    console.log("_______Task1______________");

//var ages = [20,30,40];
//var names = ['Ivanov', 'Petrov', 'Sidorov'];

//Task2
function getMaxNumber(arrEnter){
    var tempMax = 0;
    for (var count =0; count < arrEnter.length; count++){
        tempMax = (arrEnter[count] > tempMax) ? arrEnter[count] : tempMax;
    }
   return tempMax;
}
console.log(getMaxNumber([1,30,40,2,7])); // 40
console.log(getMaxNumber([1,15,-20,2,-7])); // 15
console.log("_______Task2______________");

// Task3 not ended

function strSort (strEnter){
    var strTemp ="";
    strTemp = strEnter.split("").sort().join("");
    return strTemp;
}
console.log(strSort("sdabfhkbdhjaruwqhuifehrvnfvkjfnver"));
console.log("_______Task3______________");

//task4

function strConvert (strEnter){
    var strTemp = "", arrTemp = [];
    arrTemp = strEnter.split(" ");
    arrTemp.forEach(function (item, i, arr){
        arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1, arr[i].length);
    });
    return arrTemp.join(" ");
}
console.log(strConvert("hsjvcj shdfvjh shfvhf lord"))
console.log("_______Task4______________");

//task5

function longestStrFromText (strEnter){
    var arrTemp = [], arrLength = [];
    arrTemp = strEnter.split(" ");
    arrLength = arrTemp.map(function (str){
        return str.length;
    })
    var tempMax = 0; indexMax = 0;
    for (var i = 0; i < arrLength.length; i++){
        if (arrLength[i] > tempMax) {
            tempMax = arrLength[i];
            indexMax = i;
        }
    }
    return arrTemp[indexMax];
}
console.log(longestStrFromText("khdgfhjsd kwchkw uwyu NNN jhgghgh"));
console.log(longestStrFromText("Web Development Tutorial"));

console.log("_______Task5______________");

//task  6

var arrTemp = [1, 2, 34, 56, 234], strTemp = "shjbjhfsabfvcsabhd", numberTemp = 389987;
function funcTemp (){
    }
var func = funcTemp();
function returnTypeof (){
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];
        }
        return typeof (args[0]);
}

console.log(returnTypeof(strTemp));
console.log("_______Task6______________");
//task7

var arr = ['link', 'menu', 'menu__item', 2,  'header', 56, 'footer', 'sidebar', ":"];

arr.sort(function (a,b) {return Math.random(b)- Math.random(a)});

console.log( arr); //
console.log("_______Task7______________");

// task 8

var arr = ['link', 'footer', 'menu', 'footer', 'menu__item', 'footer', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link'];
//Необходимо из этого массива получить массив с уникальными именами классов (без повторений) отсортированный по частоте использования
//(наиболее часто используемые - впереди).
//Если классы используются одинаковое количество раз - между ними не важно какой будет первее.
//result = ['link', 'menu__item', 'menu', 'header', 'footer', 'sidebar'];

function DisplayNameMax(obj) {
    var numberMax = 0, nameNumberMax = '';
    for(var name in obj)
    {if (obj[name] > numberMax){
        numberMax = obj[name];
        nameNumberMax = name;
    }}
    return nameNumberMax;
}
function isNotEmpty(obj) {
    var counter = 0;
    for (var key in obj) {
        counter++;
    }
    return (counter > 0) ? true : false;
}
var arr2={};
for(i in arr){
    (arr2[arr[i]]!=undefined)?(arr2[arr[i]]++):(arr2[arr[i]]=1);
}

var arrTemp =[];
while(isNotEmpty(arr2)){
    arrTemp.push(DisplayNameMax(arr2));
    delete arr2[DisplayNameMax(arr2)];
}

console.log(arrTemp);

console.log("_______Task8______________");

function add() {
    var args = [].slice.apply(arguments);
    for (var i = 0; i < args.length; i++){
        args[i] = args[i] * (i + 1);
    }
    return args.reduce(function(a, b) {return a + b;})
}

console.log(add(100, 200, 300));