
// 0.
let apples = 20;
let orange = 30;

// 1.
let comp = apples == orange ? "They are equal" : "They are not equal";
console.log(comp);

// 2.
comp = apples != orange ? "They are not equal" : "They are equal";
console.log(comp);

// 3.
comp = apples > orange ? "Apple is greater than Orange" : "Orange is greater than Apple";
console.log(comp);

// 4.
comp = apples <= orange ? "Apple is smaller than or equals to Orange" : "Orange is smaller than or equals to Apple";
console.log(comp);

// 5.
comp = orange > apples ? "Orange is greater than Apple" : "Orange is not greater than Apple";
console.log(comp);

// 6.
let mangos = 5;
comp = (mangos*apples) > (mangos+orange) ? "mangos * apples is greater than mangos + orange":"mangos*apples is not greater than mangos+orange";
console.log(comp);

// 7.
comp = (apples-mangos) < (orange/mangos) ? "apples - mangos is greater than orange/mangos":"apples - mangos is not greater than orange/mangos";
console.log(comp);

// 8.
comp = (mangos == apples) && (apples ==orange) ? "apples, mangos, oranges are equal":"apples, mangos, oranges are not equal";
console.log(comp);

// 9
comp = (apples % mangos) == (orange % mangos) ? "the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes are equal":"the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes are NOT equal";
console.log(comp);

// 10
comp = (mangos + apples) == (orange - mangos) ? "y" : "n";
console.log(comp);