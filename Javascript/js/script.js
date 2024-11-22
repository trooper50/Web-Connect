// There are two major data types in javascript
// primitive datatyoe: Their values are immutable, meaning that they can not be directly changed.
// Refence datatype: They're complex date types that don't store reference to the value rather than the actual value it'self, and they include objects, arrays and functions.

// Primitive data types;
// 1. Numbers: They represent both intergar and floating point numbers.
// 2. Strings: Strings are a sequence of characters used for representing text. Basically anything inside a single or double quote is a string.
// 3. booleans: They represent either True or False.
// 4. Undefined: It is represent when a variable has been declared but not assigned a value 
// 5. Null:It represents nothings. it's similar to undefined, but in most cases you are intentionally declaring that avariable should be empty.

// Variables are like containers that holds information or values which can be used and changed through out your code.
// Three differnt ways of declaring variables in Javascript
// Let Keyword
// Const keyword
// Var keyword

// Let keyword is used to declare variables that we need to change later.
// the syntax for that is; 
// Let Nameofvariable + value you want to store.
let age = 40;
console.log(AggregateError)
console.log(age);

// const is used when you're not supposed to change the value at any point
// syntax is
// const nameofvariable = value you want to store
const mybirthyear = 1970;
console.log(mybirthyear);

// code block for example looks like {}
{
     let myage1 = 44;
     // For let and const, variable declared inside a code block can only be accessed inside that code.
     var myjob = 'student'
     console.log(myjob)
     console.log(myage1)
}
console.log(myjob)

// Rules for naming your variables
// camelcase method of naming myfirstname, my_first_name
// It's case sensitive. myFIRSTNAME isn't same as MYFIRSTNAME
// You can not start variable with numbers
// let _num = 4
// console.log(_num)
// You can not name variables using javascript reserved keywords
// You should not start you variable names with an uppercase
// Make sure your variable names be descriptive.

// Basic Operators in Javascript
// Compariosn operators: They always return a boolean
let x = 5; //number
let y = 9; //string
// Double equal =  isn't to particular about the data types of what it's comparing
console.log(x == y) //false

// Triple equal to or stric equality : this takes into account the data of the values you're trying to compare.
console.log(x === y) //false

// NOT Equal TO (!=) : This is the opposite of double equal to, it doesn't really care about the data type
// NOT DOUBLE EQUAL TO (!==) : the opposite of triple equal to, takes into account the datatype of the value you'rre trying to compare
let x4 = '4';
let y7 = 7
console.log(x4 !== y7 ); //true

// Greater than and less than

// Plus Operator
// whenever we use the plus operator to add a string and a string or a string with a number, it becomes entirely somethimg different  which we call CONTATENATION
const text1 = "hello"
const text2 = "world"
const num = 2
const numstring = "10"
console.log(text1 + text2 + num)

// unary oparator
// Helps convert a string to a number for computation
console.log(typeof (numstring)) //string
const numconverted = +numstring //unary operator
console.log(typeof (numconverted)) //number

// type of operator : this is an operator that gives the datatype of any value placed inside of it 
console.log(typeof (text1));
console.log(typeof (num));
console.log(typeof (text1 + text2 + num));

// CODING CHALLENGE
// Mass / Height ** 2 or mass / (height * height)

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.76;

// calc their BMI
const bmiMark = markMass / markHeight ** 2;
const bmiJohn = johnMass / johnHeight ** 2;
console.log("bmi mark:", bmiMark); // 27.309968138370508
console.log("bmi John:", bmiJohn); // 29.700413223140497

//Comparison of Mark's and John's data
const markhigherBMI = bmiMark > bmiJohn
console.log(markhigherBMI)

//sstrings and template literals
const myName = "trooper";
const myJobs = "Footballer";
const yearOfBirth = "2001";
const trooper = "I'm " + " " + myName + " a " + (2024 - yearOfBirth) + " years old " + myJobs;
console.log(trooper);
const okocha2 = `I'm ${myName} a ${2024 - yearOfBirth} years old ${myJobs}`
console.log(okocha2);

// LOGICAL OPERATORS
// And logical operator both conditions must be met before it returns true else it returns false
// OR logical operator  one of the conditions need to be true before it returns true else it returns false
// NOT operator is the opposite whatever the boolean value you have there.
// && = AND
// || = OR
// ! = NOT

const hasDriversLicense = true;
const hasGoodVision = false;
const isSleepy = true;

console.log(hasDriversLicense || hasGoodVision && !isSleepy);
console.log(isSleepy && !hasDriversLicense || hasGoodVision);

// TYPE CONVERSION AND COERCION

const inputYear = "1990"
console.log(inputYear)
console.log(Number(inputYear))
console.log(Number("Jones"))

console.log(String(90));

// Boolen conversion : We need to understand the concept of truthy and falsey values to understand the way it does it's conversion
// falsey values : These are values that are not exactly false but would return false when we try to return them to boolen in Javascript
// We have 5 falsey values in JS and they Include; zero(0), empty string, undefined, null and NaN.

console.log(Boolean('')); // Empty string
console.log(Boolean(1))
console.log(Boolean('jayjay')); //True 

// CLASSWORK

console.log("23" - "10" - 3) //10
console.log("23" + "10" - 3) //2307