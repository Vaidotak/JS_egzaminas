/* ------------------------------ TASK 9 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funcijos
-------------------------------------------------------------------------------------------- */

// importuoju skaičius
import { one, two, three, four, five } from "./modules/numbers/numbers.js";

// importuoju submodulius iš savo sukurto math.js
import { composition, division, multiplication, substraction } from './modules/math.js';

let a = composition(one, four);
let b = division(four, two);
let c = substraction(three, two);
let d = multiplication(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules