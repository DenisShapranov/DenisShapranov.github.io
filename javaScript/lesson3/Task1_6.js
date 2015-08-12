//Task 1
var numberEnt;
do{
    numberEnt = prompt('Enter number > 100','1');
   }while ((numberEnt <= 100) && (numberEnt !== null) );
console.log(+numberEnt);

//Task 2
var counter, number;
function checkNoNumSimple (numberCh)
{   var countI = 2, str;
    do{
        ((numberCh % countI == 0) && numberCh !== 2 ) ? str = "yes" : str = "no";
        countI++;
    } while ((countI <= numberCh-1) && (str != "yes"));
    return str;
}
 number = +prompt ('Enter number','1');
 for (counter = 2; counter <= number; counter++)
 { if (checkNoNumSimple(counter) !== 'yes')
    { console.log(counter) ;}
 }
//Task 3
var countA, numbA;
    numbA = +prompt ('Enter number','1');
    for (countA = 1; countA <= numbA; countA++)
    { if (countA % 3 == 0) {
        console.log('Fizz');
    } else if (countA % 5 == 0) {
        console.log('Buzz');
    } else {console.log(countA); }
    }

//Task 4
var countB, numbB;
numbB = +prompt ('Enter number','1');
for (countB = 1; countB <= numbB; countB++)
{
    ((countB % 3 == 0) && (countB % 5 == 0)) ?  console.log('FizzBuzz') :  console.log(countB);
}

//Task 5
var x, y, chessDimensoin, stringChess;
stringChess = '';
chessDimensoin = +prompt('Какого размера шахматную доску Вы хотите нарисовать?','2');

function evenNumb (num)
{   var strEvenOdd;
    (num % 2 == 0) ? strEvenOdd = "even": strEvenOdd = "odd";
    return strEvenOdd;
}

for (x = 1; x <= chessDimensoin; x++)
{  for (y = 1; y <= chessDimensoin; y++)
    { ((evenNumb(x) == "even"  && evenNumb(y) == "even") || (evenNumb(x) == "odd" && evenNumb(y) == "odd")) ?
        stringChess = stringChess + '#':stringChess = stringChess + ' ';
    }
    stringChess = stringChess + '\n';
}
console.log(stringChess);
//Task 6
var numbTask6, powTask6;
function pow (x, n)
{   var countPow, firstX;
    firstX = x;
    for (countPow = 2; countPow <= n; countPow ++)
    { x = x*firstX; }
    return x;
}
numbTask6 = +prompt('Введие число, которое нужно возвести в степень','1');
powTask6 = +prompt('Введие степень','1');
alert(numbTask6 + ' в ' + powTask6 + ' степени равняется ' + pow (numbTask6, powTask6));
