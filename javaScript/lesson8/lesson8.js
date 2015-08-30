// task1
var ladder = {
    step: 0,
    up: function() { // вверх по лестнице
        this.step++;
        return this;  //
    },
    down: function() { // вниз по лестнице
        this.step--;
        return this;
    },
    showStep: function() { // вывести текущую ступеньку
        alert( this.step );
    }
};

ladder.up().up().down().up().up().showStep(); // 3

// task2
function Calculator() {
    this.methods = {
        "-": function(a, b) {
            return a - b;
        },
        "+": function(a, b) {
            return a + b;
        }
    };

    this.calculate = function(strEnt) {

        var arrEnt = strEnt.split(' '),
            a = +arrEnt[0],
            op = arrEnt[1],
            b = +arrEnt[2]

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](+a, +b);
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

var calc = new Calculator;
console.log(calc.calculate('3 + 7'));
calc.addMethod("*", function(a, b) {
    return a * b;
});
calc.addMethod("/", function(a, b) {
    return a / b;
});
calc.addMethod("**", function(a, b) {
    return Math.pow(a, b);
});

console.log(calc.calculate("3 ** 3"));
console.log(calc.calculate("10 / 2.5"));
console.log(calc.calculate("5 * 200"));
console.log(calc.calculate("d - 3"));

//Task3

//У вас есть объект User, который хранит имя и фамилию в свойстве this.fullName:

function User(fullName) {
    this.fullName = fullName;}

var vasya = new User('Александр Пушкин');

Object.defineProperties(vasya, {
    firstName: {
        get: function() {
            return this.fullName.split(' ')[0];
        },
        set: function(newFN) {
            this.fullName = newFN + ' ' + this.lastName;
        }
    }});
Object.defineProperties(vasya, {
    lastName: {
        get: function() {
            return this.fullName.split(' ')[1];
        },
        set: function(newLN) {
            this.fullName = this.firstName + ' ' + newLN;
        }
    }
});

// чтение firstName/lastName
console.log( vasya.firstName ); // Александр
console.log( vasya.lastName ); // Пушкин

// запись в lastName
vasya.lastName = 'Толстой';
console.log( vasya.fullName ); // Александр Толстой
vasya.firstName = 'Лев';
console.log( vasya.fullName );// Лев Толстой

// task4

//Добавить в конструктор Article:
//
//    * Подсчёт общего количества созданных объектов.
//* Запоминание даты последнего созданного объекта.
//* Используйте для этого статические свойства.
//
//    Пусть вызов Article.showStats() выводит то и другое.
//
//    Использование:


function Article() {
    Article.created = new Date();
    Article.count++;
    Article.formatDate = function(date) {
        return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()+ ":" + date.getMilliseconds();
    };

}
Article.count = 0;
Article.showStats = function() {
    console.log("Всего: ", this.count, " Последняя: ", this.formatDate(this.created) ); // (1)
};

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();
for (var i = 0; i < 999999999; i++){i*i*i }
new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)
