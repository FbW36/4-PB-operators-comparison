let apples = 20;
let oranges = 30;

//1
console.log("Are apples the same as oranges? " + (apples == oranges));
//2
console.log("Are apples greater than oranges? " + (apples !== oranges));
//3
console.log("Are apples greater than oranges? " + (apples > oranges));
//4
console.log("Are plles less or than or equal to oranges? " +(apples <= oranges));
//5
console.log("Are oranges greater than apples? " + (apples < oranges));
//6
let mangoes = 5;
console.log("Are mangoes and apples greater than mangoes added to oranges? " + (mangoes * apples > mangoes + oranges));
//7
console.log("Is mangoes - apples less than oranges divided by mangoes? " + (apples - mangoes < oranges / mangoes));
//8
console.log("Are mangoes, apples and oragnes equal? " + (mangoes == apples == oranges));
//9
console.log("Is apples/mangoes and oranges/mangoes the same? " + (apples / mangoes == oranges / mangoes));
//10
let answer = mangoes + apples > oranges - mangoes ? "True" : "False";
console.log("Are mangoes plus apples bigger than oranges minus mangoes? " + answer);
//11
