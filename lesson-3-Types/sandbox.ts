let character = 'luigi';
let age = 30;
let isBlackBelt= false;

//wrong way - Types error
// character = 30; //Type 'number' is not assignable to type 'string'.
// age = 'mario'; //Type 'string' is not assignable to type 'number'.
// isBlackBelt= 234; //Type 'number' is not assignable to type 'boolean'.

//good way
character = 'mario';
age = 25; 
isBlackBelt= true;

//logging the outputs
console.log(character)
console.log(age)
console.log(isBlackBelt)

//******functions with types*********

//wrong way
// const circ = (diameter)=>{
//   return diameter * Math.PI;
// }

// console.log(circ("hello"))
//throws error - NaN (not a number)

//right way
const circ = (diameter: number)=>{
  return diameter * Math.PI;
}

// console.log(circ("hello"))//not gonna let me put string here
console.log(circ(2))// displays - 6.283185307179586