
const add = (a, b) => a + b

const sub = (a, b) => a - b;

const multi = (a, b) => a * b;

const div = (a, b) => a / b;

const data = (callback) => {
    let num1 = 10;
    let num2 = 20;
    return callback(num1, num2);
}

console.log(add(10, 20));
console.log(sub(10, 20));
console.log(data(multi));
console.log(data(div));