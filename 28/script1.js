// Примитивные значения
const undefinedValue = undefined;
const nullValue = null;
const isUserLoggedIn = true;
const userAge = 42;
const bigIntValue = BigInt(9007199254740991); // Максимальное значение для 64-битных целых чисел
const uniqueSymbol = Symbol('#');
const userName = 'Steve';

// Объекты
const personInfo = { firstName: 'Alex' };
const numericArray = [1, 2, 3];
const customFunction = function() {};
const currentDate = new Date();

// Вывод информации в консоль
console.log('Undefined:');
console.log(undefinedValue);
console.dir(undefinedValue);

console.log('Null:');
console.log(nullValue);
console.dir(nullValue);

console.log('Boolean:');
console.log(isUserLoggedIn);
console.dir(isUserLoggedIn);

console.log('Number:');
console.log(userAge);
console.dir(userAge);

console.log('BigInt:');
console.log(bigIntValue);
console.dir(bigIntValue);

console.log('Symbol:');
console.log(uniqueSymbol);
console.dir(uniqueSymbol);

console.log('String:');
console.log(userName);
console.dir(userName);

console.log('Object:');
console.log(personInfo);
console.dir(personInfo);

console.log('Array:');
console.log(numericArray);
console.dir(numericArray);

console.log('Function:');
console.log(customFunction);
console.dir(customFunction);

console.log('Date:');
console.log(currentDate);
console.dir(currentDate);