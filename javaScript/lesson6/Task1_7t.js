// Task1
var obj = {
    className: ' my menu     menu menu menu menu menu menu menu my myclass menu menu  menu menu menu menu '
};
function delSpace (str){
    var DoubleSpace = "  ";
    do {
        if (str.indexOf(DoubleSpace) !== -1)
        {
            str = str.substring(0,str.indexOf(DoubleSpace)) +
                str.substring(str.indexOf(DoubleSpace) + 1, str.length);
        }
    } while (str.indexOf(DoubleSpace) !== -1);
    if (str[0] == " ")  { str = str.substring(1, str.length);}
    if (str[str.length -1] == " ") { str = str.substring(0, str.length -1) ;}

    return str;
}
function removeClass(obj, cls){
    var strTemp = obj.className, strCheck = cls;

    do {
        if (strTemp.indexOf(strCheck) !== -1)
        {
            strTemp = strTemp.substring(0,strTemp.indexOf(strCheck)) +
                strTemp.substring(strTemp.indexOf(strCheck) + strCheck.length, strTemp.length);
        }
    } while (strTemp.indexOf(strCheck) !== -1);
    strTemp = delSpace (strTemp);
    obj.className = strTemp;
    return obj;
}

//console.log(removeClass(obj, 'open')); // obj.className='menu'
//console.log(removeClass(obj, 'menu')); // ��� ���������
removeClass(obj, 'menu');
console.log( obj.className ); // 'my'


// Task2
var arr = ['HTML', 'JavaScript', 'CSS'], i;
var arrSorted = new Array (); //initiate array
for (i = 0; i < arr.length ; i++)
    arrSorted[i] = arr[i]; //get data to new array
arrSorted.sort();//sort new array

console.log( arrSorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (��� ���������)

// Task3
var arr1 = [1, 2, 3, 4, 5];

arr1.sort(function (a,b) {return Math.random(b)- Math.random(a)});

console.log( arr1); // �������� � ��������� �������, �������� [3,5,1,2,4]

// Task4
var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];
var arraytemp = new Array();
function objWithMinAge (array){
    var obj, ageCheck = 99999;
    for (var count = 0; count < array.length; count++)
        if (array[count].age < ageCheck) {
            ageCheck = array[count].age;
            obj = array[count];
        }
    return obj;
}
while (people.length > 0){
    arraytemp.push(objWithMinAge(people));
    people.splice(people.indexOf(objWithMinAge(people)), 1);
}
people = arraytemp.slice();

// ������ people: [vovochka, masha, vasya]
for (var count1 = 0; count1 < people.length; count1++)  console.log(people[count1].name + " : " + people[count1].age) // 6

// Task5

function delSpaceAll (str){
    var Space = " ";
    do {
        if (str.indexOf(Space) !== -1)
        {
            str = str.substring(0,str.indexOf(Space)) +
                str.substring(str.indexOf(Space) + 1, str.length);
        }
    } while (str.indexOf(Space) !== -1);

    return str;
}
function isPal(string){
    var str1, str2, arrTemp = [];
    str1 = delSpaceAll (string.toLowerCase());
    arrTemp = str1.split('').reverse();
    str2 = arrTemp.join('');
    return str1 == str2;
}


console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false

// Task6
var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];

function unique (arrString){
    var stringEnt = '';
    for (var count2 = 0; count2 < arrString.length; count2++)
        if (stringEnt.indexOf(arrString[count2]) < 0) {
            stringEnt = stringEnt + arrString[count2] + " " ;
        }
    stringEnt = stringEnt.substring(0, stringEnt.length -1);
    return stringEnt.split(' ');
}
alert (strings);
alert( unique(strings) ); // ������, ����, 8-()
console.log( unique(strings) ); // ������, ����, 8-()


// Task7
var arr = ['воз', 'Снегурочка', 'корсет', 'JavaScript', 'stripvajca' ,'ЗОВ', 'негросучка', 'костер', 'ОгнеСручка'];

function strLowSort (str){
    return str.toLowerCase().split("").sort().join("");
}

function anClean(array) {
    var strGet = "", arrTemp = [], arrTemp1 = [];
    for (var count = 0; count < array.length; count++) {
        if (arrTemp.indexOf(strLowSort(array[count])) < 0) {
            arrTemp.push(strLowSort(array[count]));
            arrTemp1.push(array[count]);
        }
    }
    return arrTemp1.join(",");
}

console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'
