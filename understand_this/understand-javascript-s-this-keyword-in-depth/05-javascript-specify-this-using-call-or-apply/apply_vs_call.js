const numbers = [10, 20, 30, 40, 50];

const slice1 = numbers.slice(1, 4);
const slice2 = numbers.slice.call(numbers, 1, 4);     //1st arg THIS argument, then arguments for the function slice
const slice3 = numbers.slice.apply(numbers, [1, 4])   //syntactic sugar

console.log(slice1);
console.log(slice2);
console.log(slice3);

/**
*  call starts with the 'C', and therefore wants a 'comma' separated list. 
*  apply starts with an 'A', and therefore wants an 'array'. 
* if you are using call or apply outside of strict mode. 
* If you set the this arg to null or undefined, 
* the JavaScript engine will ignore that value and use the global object instead.
* In strict mode, that doesn't happen. I recommend you write all of your code in strict mode.
*/