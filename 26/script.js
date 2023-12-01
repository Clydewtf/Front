const number = new Number(500);
const string = "Hello";
const boolean = true;

console.log("Number:");
console.dir(number);
console.dir(Number.prototype.__proto__)
console.dir(Number.prototype.__proto__.__proto__)

console.log("String:");
console.dir(string);
console.dir(String.prototype.__proto__)
console.dir(String.prototype.__proto__.__proto__)

console.log("Boolean:");
console.dir(boolean);
console.dir(Boolean.prototype.__proto__)
console.dir(Boolean.prototype.__proto__.__proto__)