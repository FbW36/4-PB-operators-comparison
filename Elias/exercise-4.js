//Variables
let apples = 20;
let oranges = 30;
let mangos = 5;

// Are apples and oranges equal?
console.log(apples === oranges); //==> false

//Are apples and oranges unequal?
console.log(apples !== oranges); //==> true

// are apples greater than oragnes?
console.log(apples > oranges); //==> false

// are apples less than oranges?
console.log(apples < oranges); //==> true

// are oranges greater than apples?
console.log(oranges > apples); //==> true

// is mangos added to oranges greater than mangoes multiplied by apples?
let sumApMa = apples * mangos;
let sumMaOr = mangos + oranges;
console.log(sumApMa > sumMaOr); //==> true

// is apples subtracted by mangos less than oranges divided by mangos?
console.log(apples - mangos < oranges / mangos); //==> false

// are oranges equal to mangos and apples?
console.log(mangos === apples && mangos === oranges && apples === oranges); //==> false

//is the remainder of apples divided by mangos equal to the remainder of oranges divided by mangos?
console.log(apples % mangos === oranges % mangos); //==> true

//is mangos added to apples greater than oranges minus mangos?
console.log(mangos + apples > oranges - mangos); //==> false
console.log(mangos + apples === oranges - mangos); //==> true





