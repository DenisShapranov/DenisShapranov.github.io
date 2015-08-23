# Домашнее задание. JS. Урок 6.

## Задание 1 (Удаление css клссов)

У объекта есть свойство className, которое хранит список css класов – слов, разделенных пробелами:

```js
var obj = {
  className: 'open menu'
};
```

Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

```js
removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений
```

P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:

```js
obj = {
  className: 'my menu menu'
};

removeClass(obj, 'menu');

console.log( obj.className ); // 'my'
```

Лишних пробелов после функции образовываться не должно.


## Задание 2 (Сортировка массива строк)

Есть массив строк arr. Создайте массив arrSorted — из тех же элементов, но отсортированный.

Исходный массив не должен меняться.

```js
var arr = ['HTML', 'JavaScript', 'CSS'];

// ... ваш код ...

console.log( arrSorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)
```


## Задание 3 (Random sort)

Необходимо отсортировать массив в случайном порядке используя метод sort.

```js
var arr = [1, 2, 3, 4, 5];

arr.sort(ваша функция);

console.log( arr ); // элементы в случайном порядке, например [3,5,1,2,4]
```

## Задание 4 (Object sort)

Напишите код, который отсортирует массив объектов people по полю age.

Например:
```js
var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];

... ваш код ...

// теперь people: [vovochka, masha, vasya]
console.log(people[0].age) // 6
```

Выведите список имён в массиве после сортировки.


## Задание 5 (Проверка на палиндром)

Палиндром - это строка которая читается с обоих сторон одинаково.
Например: Анна, оно, А роза упала на лапу Азора.

Необходимо написать функцию isPal(string) которая возвращает true или false в зависимости от того является ли строка палиндромом или нет.

```js
console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false
```

## Задание 6 (Уникальные элементы массива)

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr (arr — массив строк).

```js
var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];

console.log( unique(strings) ); // кришна, харе, 8-()
```

## Задание 7 (Анаграммы)

Анаграммы — слова, состоящие из одинакового количества одинаковых букв, но в разном порядке. Например:

воз - зов
киборг - гробик
корсет - костер - сектор
Напишите функцию anClean(arr), которая возвращает массив слов, очищенный от анаграмм.

```js
var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'
```

Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

## CodeWars
[Return the Missing Element](http://www.codewars.com/kata/return-the-missing-element)
[Add Property to Every Object in Array](http://www.codewars.com/kata/add-property-to-every-object-in-array)
[Find Your Villain Name](http://www.codewars.com/kata/find-your-villain-name)
[Use reduce() to calculate the sum of the values in an array](http://www.codewars.com/kata/use-reduce-to-calculate-the-sum-of-the-values-in-an-array)
[Take a Ten Minute Walk](http://www.codewars.com/kata/take-a-ten-minute-walk)
