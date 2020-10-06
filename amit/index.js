let apples = 20;
let oranges = 30;
let equal = apples == oranges;
console.log(equal); //false

let equal2 = apples != oranges;
console.log(equal2); // true

let equal3 = apples > oranges;
console.log(equal3);

let equal4 = apples <= oranges;
console.log(equal4);

let equal5 = oranges > apples;
console.log(equal5);

// que.6
let mangoes = 5;
let mul = mangoes * apples;
let add = mangoes + oranges;
let check = mul > add;
console.log(check);

//que.7
let sub = apples - mangoes;
let div = oranges / mangoes;
let check2 = sub < div;
console.log(check2);

//que 8
let allEqual = (mangoes == apples) == oranges;
console.log(allEqual);

// que 9. Check whether the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes are equal.
let remainderApp = apples % 2;
console.log(remainderApp);

let div2 = remainderApp / mangoes;
console.log(div2);

let remainderOrn = oranges % 2;
console.log(remainderOrn);

let div3 = remainderOrn / mangoes;
console.log(div3);

let result = div2 == div3;
console.log(result);

// que 10 Check whether mangoes added to apples is greater than oranges minus mangoes. If it is not, find an operator which will give a result of true.

let plus = mangoes + apples;
let minus = oranges - mangoes;
let res1 = plus > minus;
console.log(res1);

let res2 = plus == minus;
console.log(res2);
