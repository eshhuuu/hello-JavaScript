//String to Number conversion Example #1

let name = "Ayesha"

console.log(typeof (name));
//#1 conversion
let valueInNumber = Number(name)//number

console.log(typeof (valueInNumber)); //number but in real its not a number 
console.log(valueInNumber); //NaN 


// Example #2 null to number
let score = null

console.log(typeof score);//Object
console.log( score);//null
//#2 conversion
let inNumber = Number(score)//convert to number
console.log(typeof inNumber); //Number
console.log(inNumber);//0


//example #3 Undefined datatype to number
let num = undefined

console.log(num);

//#3 conversion
let toNum = Number(num)

console.log(typeof toNum);//number
console.log(toNum);//NaN

//Example #4 Boolean to Number 
let isChecked = true

console.log(isChecked);
console.log(typeof isChecked);

//#4 conversion
let toNumber = Number(isChecked);
console.log(toNumber);//1 for true and 0 for false

/* To Number Basic Conversions
"33" => 33
"33abc" => NaN
true => 1
Flase => 0
null => 0
undefined => NaN */

//Number to Boolean Example 
let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*Num to Boolean conv basics
1 => True
0 => False*/

//String to Boolean
let isName = "Ayesha"

let booleanIsName = Boolean(isName)
console.log(booleanIsName);

//For empty String

let isEmpty = ""

let booleanIsEmpty = Boolean(isEmpty)
console.log(booleanIsEmpty);

/* String to boolean basics
"Ayesha" => True
"" => False */

//Number to String 

let someNumber = 33

let stringSomeNumber = String (someNumber)
console.log(stringSomeNumber);
console.log(typeof stringSomeNumber);

