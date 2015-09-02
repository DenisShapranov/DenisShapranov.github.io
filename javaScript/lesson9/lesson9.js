//codewar
function add(n) {
   return function (n1) { return n + n1;}
}
console.log(add(1)(3));

// task1

function sumArgs() {
    var args = [].slice.apply(arguments);
    return args.reduce(function(a, b) {
        return a + b;
    });
}

alert( sumArgs(1, 2, 3, 4, 2) ); // 6, ар


//task2

function applyAll(func){
    return func.apply(this, [].slice.call(arguments, 1));
}
console.log( applyAll(Math.max, 2, -2, 3) ); // 3

console.log( applyAll(Math.min, 2, -2, 3) ); // -2

function sum() { // суммирует аргументы: sum(1,2,3) = 6
    return [].reduce.call(arguments, function(a, b) {
        return a + b;
    });
}

function mul() { // перемножает аргументы: mul(2,3,4) = 24
    return [].reduce.call(arguments, function(a, b) {
        return a * b;
    });
}

console.log( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
console.log( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24

// task3

function work(a, b) {
    alert( a + b ); // work - произвольная функция
}

function makeLogging(f, log) {
    function wrapper() {
        log.push([].slice.call(arguments));
        return f.apply(this, arguments);
    }
    return wrapper;
}

var abc = [];
work = makeLogging(work, abc);

work(1, 2); // 3
work(4, 5); // 9

console.log(abc);

//task4

function f(x) {
    return Math.random()*x;
}

function makeCaching(f) {
    var cache = {};

    return function(x) {
        if (!(x in cache)) {
            cache[x] = f.call(this, x);
        }
        return cache[x];
    };

}

f = makeCaching(f);

var a = f(5);
var b = f(5);
console.log(( a == b )); // true (значение закешировано)

b = f(7);
console.log( a == b ); // false, другой аргумент => другое значение