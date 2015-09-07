# Домашнее задание. JS. Урок 10.

## Задание 1 (Объект в массив)

Есть объект из чисел, строк и прочих данных. Необходимо его превратить в массив состоящий только из чисел или строк.
Написать метод `extractNumber` или `extractString`, который будет возвращать массив.

```js
var obj = {
  person1Age: 20,
  person1Name: 'Ivanov',
  person2Age: 30,
  person2Name: 'Petrov',
  person3Age: 40,
  person3Name: 'Sidorov'
};

var ages = [20,30,40];
var names = ['Ivanov', 'Petrov', 'Sidorov'];
```

## Задание 2 (Максимальное число в массиве)
Необходимо написать функцию, которая будет принимать на вход массив чисел и возвращать самое большое.

```js
getMaxNumber([1,30,40,2,7]); // 40
getMaxNumber([1,15,-20,2,-7]); // 15
```

## Задание 3
Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor

Example string: `webmaster` 

Expected Output: `abeemrstw`

Assume punctuation and numbers symbols are not included in the passed string.

## Задание 4
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. Go to the editor

Example string: `the quick brown fox` 

Expected Output: `The Quick Brown Fox`

## Задание 5
Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Go to the editor

Example string: `Web Development Tutorial` 

Expected Output: `Development`

## Задание 6
Write a JavaScript function which accepts an argument and returns the type.
Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

## Задание 7
Write a function `suffle(arr)` to shuffle an array. 
 
## Задание 8 (Уникальные css классы)
Имеется массив css классов со старницы.
 
```js
var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link' ... ];
```

Необходимо из этого массива получить массив с уникальными именами классов (без повторений) отсортированный по частоте использования 
(наиболее часто используемые - впереди).

Если классы используются одинаковое количество раз - между ними не важно какой будет первее. 

```js
result = ['link', 'menu__item', 'menu', 'header', 'footer', 'sidebar', ... ];
``` 

## Codewars 7q

1. [more-than-one-way-to-call-a-function-or-skin-a-cat](http://www.codewars.com/kata/more-than-one-way-to-call-a-function-or-skin-a-cat)
function sum (a,b){
  if (typeof b === "undefined") { // partial
        return function (b) {
              return a + b;
        };
     }
   // full application
   return a + b;
}
2. [case-swapping](http://www.codewars.com/kata/case-swapping)

function swap(str){
var arrTemp = str.split("");
for (var i in arrTemp){
if (arrTemp[i] >= "a"){
arrTemp[i] = arrTemp[i].toUpperCase();
} else {arrTemp[i] = arrTemp[i].toLowerCase();}
}
return arrTemp.join("");
}
3. [descending-order](http://www.codewars.com/kata/descending-order)

function descendingOrder(n){
    var str ="";
    str += n;
    str = str.split("").sort().reverse().join("");
    return +str;
}
4. [complete-the-pattern-number-10-parallelogram](http://www.codewars.com/kata/complete-the-pattern-number-10-parallelogram)
5. [find-duplicates](http://www.codewars.com/kata/find-duplicates)

function duplicates(arr) {
    var arrTemp = [], count, arrGet = [], stringEnt = '';
    arrTemp = arr.slice();
    for (var counter = 0; counter < arrTemp.length; counter++)
    { count = 0;
        for (var counterInner = 0; counterInner < arr.length; counterInner++)
        { if (arr[counterInner] === arrTemp[counter]) count++;
        }
        if (count > 1) {arrGet.push(arrTemp[counter]);}
    }
    for (var count2 = 0; count2 < arrGet.length; count2++)
        if (stringEnt.indexOf(arrGet[count2]) < 0) {
            stringEnt = stringEnt + arrGet[count2] + " " ;
        }
    console.log(arrGet);
    stringEnt = stringEnt.substring(0, stringEnt.length -1);
    console.log(stringEnt);
    if (arrGet.length > 0) {
        arrGet.length = 0;
        arrGet = stringEnt.split(' ');
        for (var i = 0; i < arrGet.length; i++)
        {if (+arrGet[i]) {
            arrGet[i] = +arrGet[i];
        }}

    }

    return arrGet
    //TODO: return the array of duplicates from arr
}
6. [gradually-adding-parameters](http://www.codewars.com/kata/gradually-adding-parameters)
7. [reverseit-1](http://www.codewars.com/kata/reverseit-1)
8. [basic-js-calculating-averages](http://www.codewars.com/kata/basic-js-calculating-averages)

## Codewars 6q

1. [complete-fibonacci-series](http://www.codewars.com/kata/complete-fibonacci-series)
2. [detect-pangram](http://www.codewars.com/kata/detect-pangram)
3. [multiples-of-3-and-5](http://www.codewars.com/kata/multiples-of-3-and-5)
4. [count-characters-in-your-string](http://www.codewars.com/kata/count-characters-in-your-string)
5. [typer-dot-js](http://www.codewars.com/kata/typer-dot-js)
