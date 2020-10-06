let apples = 20;
let oranges = 30;

// 1
let res1 = apples == oranges;
console.log("1. Are apples and oranges equal?", res1);

// 2
let res2 = apples != oranges;
console.log("2. Are apples and oranges not equal?", res2);

// 3
let res3 = apples > oranges;
console.log("3. Are apples greater than oranges?", res3);

// 4
let res4 = apples <= oranges;
console.log("4. Are apples less than or equal to oranges?", res4);

// 5
let res5 = oranges > apples;
console.log("5. Are oranges greater than apples?", res5);

// 6
let mangoes = 5;
let mul = mangoes * apples;
let add = mangoes + oranges;
let res6 = mul > add;
console.log(
  "6. Are the result of multipling mangoes and apples greater than mangoes added to oranges?",
  res6
);

// 7
let sub = apples - mangoes;
let div = oranges / mangoes;
let res7 = sub < div;
console.log(
  "7. Are the result of subtracting mangoes from apples less than oranges divided by mangoes?",
  res7
);

// 8
let res8 = (mangoes == apples) == oranges;
console.log("8. Are mangoes, apples and oranges equal?", res8);

// 9
let rem1 = apples % mangoes;
let rem2 = oranges % mangoes;
let res9 = rem1 == rem2;
console.log(
  "9. Are the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes equal?",
  res9
);

// 10
let add1 = mangoes + apples;
let sub1 = oranges - mangoes;
let res10 = add1 > sub1 ? "Not" : "true";
console.log(
  "10. Are mangoes added to apples greater than oranges minus mangoes. If it is not, then give a result of true.",
  res10
);
