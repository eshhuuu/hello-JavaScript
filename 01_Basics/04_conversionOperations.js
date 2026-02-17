//**************Arithmatic Operations*******************

// Addition Operator
console.log(5 + 2);// 7
console.log(6 + true);// 7
console.log(false + false); //0
console.log(5 + "2");//52
//Addition using Strings
console.log("hello " + "everyone");//hello everyone
console.log(2001 + ": A Space Odyssey");
console.log(5 + "Ayesha"); // "5Ayesha"
console.log("foo" + false); // "foofalse"
console.log("2" + 5 + 2); // "252"
console.log(2 + 2 + "1");//41

//BigInt and Number

//console.log(1n + 2);Error bcz we cannot add BigInt with any number or string, We must convert to add
 
//conversion of number into BigInt
let numb = 2;
 let numbBigInt = BigInt(numb);
 console.log(numbBigInt);
 console.log(1n + numbBigInt);//3n 

//Subtraction Operator

console.log(9 - "Ayesha");// NaN
console.log(5 - true);//4
console.log(5 - false);//5
console.log(5 - "3");//2, "3" is converted into number 3

//Multiplication Operator

console.log(-5 * 4);// -20
console.log("3" * 5);//15
console.log("Ayesha" * 2);//NaN
console.log(true * 2);//2
console.log(Infinity * 0); // NaN
console.log(Infinity * Infinity); // Infinity


//Division Operator

console.log(12 / 3);//4
console.log(6 / "3");//2
console.log(6 / 0); //Infinity
console.log(6 / -0);//-Infinity
console.log(5 / "hello"); // NaN

//Division using bigInt
console.log(1n / 2n); // 0n
console.log(5n / 3n); // 1n
console.log(-1n / 3n); // 0n
console.log(1n / -3n); // 0n

//Remainder Operator
console.log(-12 % 5);//-2
console.log(-6 % 2);//-0

//with positive dividend
console.log(1 % -2); // 1, when divisor is larger than dividend then remainder will be the dividend
console.log(6 % 8); // 6
console.log(2 % 3); // 2
console.log(5.5 % 2); // 1.5

//with negative dividend
console.log(-13 % 5); //-3
console.log(-1 % 2); //-1
console.log(-4 % 2); //-0


//With infinity
console.log(Infinity % 2); // NaN
console.log(Infinity % 0); // NaN
console.log(Infinity % Infinity); // NaN
console.log(2 % Infinity); // 2
console.log(0 % Infinity); // 0  


//With Exponentiation (**) operator

console.log(3 ** 2); // 9
console.log(3 ** 2.5); // 15.588457268119896
console.log(10 ** -1); // 0.1
console.log(2 ** 1024); // Infinity
console.log(NaN ** 2); // NaN
console.log(NaN ** 0); // 1, as 0 power of any string is equal to 1
console.log(1 ** Infinity); // NaN 
console.log(4 ** "5"); // 1024
console.log(5 ** "A"); // NaN
console.log(Infinity ** Infinity);//Infinity
console.log(Infinity ** 3);//Infinity
console.log(-(4 ** 2)); // -16
console.log((-4) ** 2); // 16 */


//Increment Operator
//postfix increment x++
let x=3;
let y=x++;
console.log("x:",x,"y:",y);

//prefix increment ++x
let a=5;
let b=++a;
console.log("a:",a,"b:",b);

//Decrement Operator

//postfix decrement 
let c=5;
let d=c--;
console.log("c:",c,"d:",d);
 
//prefix decrement

let num1=7;
let num2=--num1;

console.log("1:",num1,"2:",num2);
