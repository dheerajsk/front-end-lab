var c = 10; // global var

function arithmatic(num1, num2) {
    var a = num1 * num2;
    var b = num1 + num2; // outer function var
    return function () {
        var d = 15; // local variable
        c = 5;
        console.log(a + b + c + d);
    };
}

var result = arithmatic(2, 3);
console.log(result);
console.log(c);
result();