// Before values
const beforeNum = "15";
const beforeStr = "9";

// Convert a number to a string
const numToString = beforeNum.toString();

// Check if a number is an integer
const isBeforeNumInteger = Number.isInteger(beforeNum);

// Get the number of characters in the string
const numCharsInBeforeStr = beforeStr.length;

// Check if the string starts with a specific number
const startsWithFour = beforeStr.startsWith("Four");

// Render Before values on the HTML page
document.querySelector("#beforeSum").textContent = `Sum: ${beforeNum}`;
document.querySelector("#beforeString").textContent = `String: ${beforeStr}`;
document.querySelector("#numToString").textContent = `Number to String: ${numToString}`;
document.querySelector("#isBeforeNumInteger").textContent = `Is Integer: ${isBeforeNumInteger ? 'True' : 'False'}`;
document.querySelector("#numCharsInBeforeStr").textContent = `Number of Characters: ${numCharsInBeforeStr}`;
document.querySelector("#startsWithFour").textContent = `Starts with 'Four': ${startsWithFour ? 'True' : 'False'}`;

// Number methods
const numOne = 10;
const numTwo = 5;

// Check if a number is an integer
const isAfterSumInteger = Number.isInteger(numOne + numTwo);

// String methods
const str1 = "9";
const str2 = "3";

// After values
const afterSum = numOne + numTwo;
const afterSub = numOne - numTwo;
const afterTotalStr = str1 + " " + str2;

// It check if the string ends with a specific number
const endsWith3 = afterTotalStr.endsWith("Three");

// Render After values on the HTML page
document.querySelector("#afterSum").textContent = `Sum: ${afterSum}`;
document.querySelector("#afterSub").textContent = `Sub: ${afterSub}`;
document.querySelector("#afterTotalStr").textContent = `TotalStr: ${afterTotalStr}`;
document.querySelector("#isAfterSumInteger").textContent = `Is Integer: ${isAfterSumInteger ? 'True' : 'False'}`;


document.querySelector("#Three").textContent = `a cool number?': ${Three ? 'True' : 'False'}`;

// Log input to the console
console.log("Before Sum:", beforeNum);
console.log("Before String:", beforeStr);
console.log("Number to String:", numToString);
console.log("Is Before Num Integer:", isBeforeNumInteger);
console.log("Number of Characters in Before String:", numCharsInBeforeStr);
console.log("Starts with 'Four':", startsWithFour);
console.log("After Sum:", afterSum);
console.log("After Sub:", afterSub);
console.log("After TotalStr:", afterTotalStr);
console.log("Is After Sum Integer:", isAfterSumInteger);
console.log("Ends with 'Three':", endsWithThree);


