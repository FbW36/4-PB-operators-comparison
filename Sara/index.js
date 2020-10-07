// = to assign ; 
// == loose equality operator
// === strict equality operator -java asking that the value is equel on both sides 

//data type coercion 7 and an other data type 7

let apples = 20 ;
let oranges = 30 ; 

// 1
console.log('1) Check whether apples and oranges are equal ==>', apples === oranges ? 'true' : 'false') ; 

// 2
console.log('2) Check whether apples and oranges are *not* equal ==>', apples !== oranges ? 'true' : 'false') ; 

// 3
console.log('3) Check whether apples is greater than oranges ==>', apples > oranges ? 'true' : 'false') ; 

// 4
console.log('4) Check whether apples is less than or equal to oranges ==>', apples <= oranges ? 'true' : 'false') ; 

// 5
console.log('5) Check whether oranges is greater than apples ==>', apples >! oranges ? 'true' : 'fasle') ; 

// 6
let mangoes = 5 ; 
console.log('6) Declare another variable "mangoes" and give it a value of 5. Multiply mangoes and apples, and check whether this result is greater than mangoes added to oranges ==>', mangoes * apples > mangoes + oranges ? 'true' : 'false') ;

// 7
console.log('7) Subtract mangoes from apples and check whether this result is less than oranges divided by mangoes ==>', apples - mangoes < oranges / mangoes ? 'true' : 'false') ; 

// 8 
console.log('8) Check whether mangoes, apples and oranges are equal ==>', apples === oranges === mangoes ? 'true' : 'false') ; 

// 9
/* ==> old solution 
console.log(20 % 5) ; // 0
console.log(30 % 5) ; // 0
console.log(20 % 5 === 30 % 5 ? 'true' : 'false') ; */
// ==> new solution 
console.log('9) Check whether the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes are equal ==>', (apples % mangoes) == (oranges % mangoes));

// 10 
console.log('10) Check whether mangoes added to apples is greater than oranges minus mangoes. If it is not, find an operator which will give a result of true ==>', mangoes + apples > oranges - mangoes ? 'true' : 'false') ;

console.log((mangoes + apples) >= (oranges - mangoes)); ;

// 11