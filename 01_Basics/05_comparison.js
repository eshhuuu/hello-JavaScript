//Comparison btw same datatypes
console.log(2 > 3);
console.log(2 >= 3);
console.log(2 == 3);
console.log(2 != 3);

//diff datatypes comparison(problem)
console.log("2" > 3);//should not compare different datatypes

//null comparison
console.log(null > 0);
console.log(null == 0);//in equality null is not converted into number
console.log(null >= 0);//In comparison operator null is converted into number 0
console.log(null < 0);

//Undefined comparison 
console.log(undefined == 0);//value will be false in all cases of undefined
console.log(undefined < 0);

//Strict check === (check datatype+value)
 console.log("8" = 8);
 



