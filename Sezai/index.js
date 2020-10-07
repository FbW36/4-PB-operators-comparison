// 0.

let apples = 20;
let oranges = 30;
console.log(apples, oranges);

// 1.
console.log("apples and oranges are equal?", apples == oranges);

// 2.
console.log("apples and oranges are NOT equal?", apples != oranges);

// 3.
console.log("are apples greater than oranges?", apples > oranges);

// 4.
console.log("are apples less than or equal than oranges?", apples <= oranges);

// 5.
console.log("are oranges greater than apple?", oranges > apples);

// 6.
let mangoes = 5;
console.log("is mangoes multiplied with apples greater than mangoes added to oranges?", (apples * mangoes) > (oranges / mangoes));

// 7.
console.log("is mangoes subtracted from apples less than oranges divided by mangoes?", (mangoes - apples) < (oranges / mangoes));

// 8.
console.log("are mangoes, apples and oranges equal?", mangoes == apples == oranges);

// 9.
console.log("is the remainder from apples divided by mangoes and the remainder of oranges divided by mangoes equal?", (apples % 2 / mangoes) == (oranges % 2 / mangoes));

// 10.a
console.log("is mangoes added to apple greater than oranges minus mangoes?", (mangoes + apples) > (oranges - mangoes)); //false

// 10.b
console.log("is mangoes added to apple lesser than or equal oranges subtracted from mangoes?", (mangoes + apples) <= (oranges - mangoes));