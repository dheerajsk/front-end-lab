

const empId = (function () {
    let count = 0;
    return function () {
        ++count;
        return `emp${count}`;
    }
})();

console.log("Alex: " + empId());
console.log("Annie: " + empId());
console.log("John: " + empId());

// Callbacks

function fullName(firstName, lastName, callback) {
    console.log("My name is " + firstName + " " + lastName);
    callback(lastName);
}

var greeting = function (lastName) {
    console.log("welcome " + lastName);
}

fullName("Alex", "Wilson", greeting);
fullName("John", "Doe", greeting);
fullName("Annie", "Butler", greeting);