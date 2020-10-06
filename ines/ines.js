let apples = 20;
let oranges = 30;

console.log("Line 4 is:", apples === oranges ? true : false);
console.log("Line 5 is:", apples !== oranges ? true : false);
console.log("Line 6 is:", apples < oranges ? true : false);
console.log("Line 7 is:", oranges > apples ? true : false);

let mangoes = 5;

console.log("Line 11 is:", mangoes * apples > mangoes + oranges ? true : false);
console.log("Line 12 is: ", (mangoes === oranges) === apples ? true : false);
console.log(
  "Line 13 is:",
  apples % mangoes === oranges % mangoes ? true : false
);
console.log(
  "Line 14 is",
  mangoes + apples > oranges - mangoes ? false : true,
  "because it's false"
);
