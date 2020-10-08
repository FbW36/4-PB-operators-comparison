let apples = 20;
let oranges = 30;

// 1

console.log("are apples and oranges are equal? ", apples == oranges);
// 2

console.log("are apples and oranges are not equal? ", apples != oranges);
// 3

console.log("are apples are greater than oranges ? ", apples > oranges);
// 4

console.log("are apples less than or equal to oranges? ", apples <= oranges);
// 5

let greater2 = oranges > apples;
console.log("are oranges greater than apples? ", oranges > apples);

// 6

var mangoes = 5;
console.log(
  "Multiply mangoes and apples, and  is this result  greater than mangoes added to oranges? ",
  mangoes * apples > mangoes + oranges
);

// 7

console.log(
  "Subtract mangoes from apples and is this result less than oranges divided by mangoes? ",
  apples - mangoes < oranges / mangoes
);

// 8

console.log(
  "are mangoes, apples and oranges  equal? ",
  (mangoes === apples) === mangoes
);

// 9

console.log(
  " are the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes  equal? ",
  apples % mangoes === oranges % mangoes
);
// 10

console.log(
  "mangoes added to apples is greater than oranges minus mangoes ",
  mangoes + apples > oranges - mangoes
);

console.log(apples + mangoes > oranges - mangoes ? true : false);
console.log(apples + mangoes === oranges - mangoes ? true : false);

console.log(apples + mangoes > oranges - mangoes ? true : false);
