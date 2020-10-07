let apples = 20;
let oranges = 30;

//exercise 1
let comparison1 = apples == oranges ? "true" : "false";
console.log("are apple equal oranges?", comparison1);

//exercise 2
let comparison2 = apples != oranges ? "true" : "false";
console.log("are apples NOT equal oranges?", comparison2);

//exercise 3
let comparison3 = apples > oranges ? "true" : "false";
console.log("are apples greater than oranges?", comparison3);

//exercise 4
let comparison4 = apples <= oranges ? "true" : "false";
console.log("are apples less than or equal to oranges?", comparison4);

//exercise 5
let comparison5 = oranges > apples ? "true" : "false";
console.log("are oranges greater than apples?", comparison4);

// exercise 6
let mangoes = 5;
let mangTimesApples = mangoes * apples;
let mangPlusOranges = mangoes + oranges;
let comparison6 = mangTimesApples > mangPlusOranges ? "true" : "false";
console.log(
  "are (mangoes * apples) greater than (manoges + oranges)?",
  comparison4
);
// exercise 7
let mangMinusApples = mangoes - apples;
let orangesDivMangoes = oranges / mangoes;
console.log("mangoes - apples = ", mangMinusApples);
console.log("oranges / mangoes = ", orangesDivMangoes);
let comparison7 = mangMinusApples < orangesDivMangoes ? "true" : "false";
console.log(
  "are (mangoes - apples) less than (oranges / mangoes)?",
  comparison7
);

// exercise 8
console.log("Mangoes = ", mangoes);
console.log("Apples = ", apples);
console.log("Oranges = ", oranges);
console.log(
  "Are these 3 fruits the same amount?",
  (mangoes == apples) == oranges ? "true" : "false"
);

// exercise 9
remainder9a = apples % mangoes;
console.log("the remainder of apples by mangoes is = ", remainder9a);
remainder9b = oranges % mangoes;
console.log("the remainder of oranges by mangoes is = ", remainder9b);
console.log(
  "the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes is equal?",
  remainder9a == remainder9b ? "true" : "false"
);

// exercise 10
console.log("EXERCISE 10");
console.log(mangoes + apples > oranges - mangoes);
console.log(mangoes + apples >= oranges - mangoes);

// exercise 11
// had already done before reading this
