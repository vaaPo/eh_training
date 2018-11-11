// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals
 
/* some collected examples from the mozilla javascript materials
 * related to osa0
 * I am using Quokka.js to see fast the console.log
 * please note that those rows are commented out which stop parsing the javascript on the fly
 */
 
 //UTF
var Früh = "foobar";
console.log(Früh)
var a;
console.log('The value of a is ' + a); 
console.log('The value of b is ' + b); 
var b;
// This one may puzzle you until you read 'Variable hoisting' below
//console.log('The value of c is ' + c); 
// Uncaught ReferenceError: c is not defined

let x;
console.log('The value of x is ' + x); // The value of x is undefined
//console.log('The value of y is ' + y); // Uncaught ReferenceError: y is not defined
let y;

var input;
console.log(input);

if (input === undefined) {      // smells IS NULL :)
//  doThis();
} else {
//  doThat();
}


var myArray = [];
//if (!myArray[0]) myFunction();   // is false !myArray[0]
console.log(myArray);

var a;
a + 2;  // Evaluates to NaN

// oops 
// When you evaluate a null variable, 
// the null value behaves as 0 in numeric contexts and as false in boolean contexts

var n = null;
console.log(n * 32); // Will log 0 to the console

// VARIABLE SCOPE

if (true) {
    var xx = 5;     // is local variable
  }
  console.log(xx);  // x is 5

if (true) {
    let y = 5; //This behavior changes, when using the let declaration introduced in ECMAScript 2015.
  }
console.log(y);  // ReferenceError: y is not defined




  // VARIABLE HOISTING
  /**
 * Example 1
 */
console.log(xxx === undefined); // true
var xxx = 3;

/**
 * Example 2
 */
// will return a value of undefined
var myvar = 'my value';
console.log(myvar); // undefined
 
(function() {
  console.log(myvar); // undefined
  var myvar = 'local value';
})();

/**
 * In ECMAScript 2015, let (const) does not hoist the variable 
 * to the top of the block. Referencing the variable 
 * in the block before the variable declaration 
 * results in a ReferenceError. The variable is 
 * in a "temporal dead zone" from the start 
 * of the block until the declaration is processed.
 * 
 */
//console.log(yyy); // ReferenceError
let yyy = 3;

//FUNCTION HOISTING
/**Section
* For functions, only the function declaration gets hoisted to the top
* and not the function expression.
*/

/* Function declaration */
foo(); // "bar"

function foo() {
  console.log('bar');
}

/* Function expression */
//baz(); // TypeError: baz is not a function

var baz = function() {
  console.log('bar2');
};

// GLOBAL VARIABLES
/**
 * Global variables are in fact properties of the global object. 
 * In web pages, the global object is window, so you can set and access 
 * global variables using the window.variable syntax.
 * Consequently, you can access global variables declared in one window
 *  or frame from another window or frame by specifying 
 * the window or frame name. 
 * For example, if a variable called phoneNumber is declared in a document,
 * you can refer to this variable from an iframe as parent.phoneNumber.
 */

// CONSTANTS
// const keyword
const number = 42;

try {
  number = 99;
} catch(err) {
  console.log(err);
  // expected output: TypeError: invalid assignment to const `number'
  // Note - error messages will vary depending on browser
}

console.log(number);

// expected output: 42
 const PI = 3.14;
 console.log(PI)

 // THIS WILL CAUSE AN ERROR
function f() {};
//const f = 5;
console.log(f())


// THIS WILL CAUSE AN ERROR TOO
//function f() {
//  const g = 5;
//  var g;
//  //statements
//}

// constant properties are not protected
const MY_OBJECT = {'key': 'value'};
console.log(MY_OBJECT)
MY_OBJECT.key = 'otherValue';
console.log(MY_OBJECT)

// contents of an array are not protected
const MY_ARRAY = ['HTML','CSS'];
console.log(MY_ARRAY)

MY_ARRAY.push('JAVASCRIPT');
console.log(MY_ARRAY); //logs ['HTML','CSS','JAVASCRIPT'];
MY_ARRAY.sort();
console.log(MY_ARRAY)

// CONST AS ALL UPPERCASE
// NOTE: Constants can be declared with uppercase or lowercase, but a common
// convention is to use all-uppercase letters.

// define MY_FAV2 as a constant and give it the value 7
const MY_FAV2 = 7;

// this will throw an error - Uncaught TypeError: Assignment to constant variable.
//MY_FAV2 = 20;

// MY_FAV2 is 7
console.log('my favorite number is: ' + MY_FAV2);

// trying to redeclare a constant throws an error -  Uncaught SyntaxError: Identifier 'MY_FAV2' has already been declared
//const MY_FAV2 = 20;

// the name MY_FAV2 is reserved for constant above, so this will fail too
//var MY_FAV2 = 20;

// this throws an error too
//let MY_FAV2 = 20;

// it's important to note the nature of block scoping
if (MY_FAV2 === 7) { 
    // this is fine and creates a block scoped MY_FAV2 variable 
    // (works equally well with let to declare a block scoped non const variable)
    let MY_FAV2 = 20;

    // MY_FAV2 is now 20
    console.log('my favorite number is ' + MY_FAV2);

    // this gets hoisted into the global context and throws an error
  //  var MY_FAV2 = 20;
}

// MY_FAV2 is still 7
console.log('my favorite number is ' + MY_FAV2);

// throws an error - Uncaught SyntaxError: Missing initializer in const declaration
//const FOO; 

// const also works on objects
const MY_OBJECT2 = {'key': 'value'};

// Attempting to overwrite the object throws an error - Uncaught TypeError: Assignment to constant variable.
//MY_OBJECT2 = {'OTHER_KEY': 'value'};

// However, object keys are not protected,
// so the following statement is executed without problem
MY_OBJECT.key = 'otherValue'; // Use Object.freeze() to make object immutable

// The same applies to arrays
const MY_ARRAY2 = [];
// It's possible to push items into the array
MY_ARRAY2.push('A'); // ["A"]
// However, assigning a new array to the variable throws an error - Uncaught TypeError: Assignment to constant variable.
//MY_ARRAY2 = ['B'];

// CONST UPPERCASE




// DATA TYPES
/**
 * 
    Six data types that are primitives:
        Boolean. true and false.
        null. A special keyword denoting a null value. Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.
        undefined. A top-level property whose value is not defined.
        Number. An integer or floating point number. For example: 42 or 3.14159.
        String. A sequence of characters that represent a text value. For example:  "Howdy"
        Symbol (new in ECMAScript 2015). A data type whose instances are unique and immutable.
    and Object
Although these data types are relatively few, 
they enable you to perform useful functions with your applications. 
Objects and functions are the other fundamental elements in the language. 
You can think of objects as named containers for values, 
and functions as procedures that your application can perform.
 */

 // DATA TYPE CONVERSION
var answer = 42;                           // dynamically typed to Number
console.log(answer)
answer = 'Thanks for all the fish...';     // dynamically typed to String
console.log(answer)


// + operator --> STRING
x = 'The answer is ' + 42 // "The answer is 42"     // dynamically type to STRING
console.log(x)
console.log(typeof x)
y = 42 + ' is the answer' // "42 is the answer"
console.log(y)
console.log(typeof y)

// other operator  -
zz = '37' - 7 // 30
console.log(zz)
console.log(typeof zz)
zz= '37' + 7 // "377"
console.log(zz)
console.log(typeof zz)

//CONVERTING STRINGS TO NUMBERS 
boo='1.1' + '1.1' // '1.11.1'
console.log(boo)
zoo=(+'1.1') + (+'1.1') // 2.2   
console.log(zoo)
// Note: the parentheses are added for clarity, not required.

// parseInt
function roughScale(x, base) {
    var parsed = parseInt(x, base);
    if (isNaN(parsed)) { return 0 }
    return parsed * 100;
  }
  
  console.log(roughScale(' 0xF', 16));
  // expected output: 1500
  
  console.log(roughScale('321', 2));
  // expected output: 0

  //parseFloat
  function circumference(r) {
    return parseFloat(r) * 2.0 * Math.PI;
  }
  
  console.log(circumference(4.567));
  // expected output: 28.695307297889173
  
  console.log(circumference('4.567abcdefgh'));
  // expected output: 28.695307297889173
  console.log(typeof '4.567abcdefgh')
  console.log(typeof parseFloat('4.567abcdefgh'))
  
  console.log(circumference('abcdefgh'));
  // expected output: NaN


//ARRAY LITERALS
//Array literals are also Array objects. See Array and Indexed collections for details on Array objects.
var coffees = ['French Roast', 'Colombian', 'Kona'];
console.log(typeof coffees)
console.log(coffees)

var fruits = ['Apple', 'Banana'];
console.log(fruits.length);
var first = fruits[0];
console.log(first)
var last = fruits[fruits.length - 1];
console.log(last)
fruits.forEach(function(item, index, array) {
    console.log(item, index);
});

var newLength = fruits.push('Orange');
fruits.forEach(function(item, index, array) {
    console.log(item, index);
});
console.log(newLength)
var last = fruits.pop(); // remove Orange (from the end)
console.log(last)
fruits.forEach(function(item, index, array) {
    console.log(item, index);
});
console.log(fruits)

var first = fruits.shift(); // remove Apple from the front
console.log(first)
fruits.forEach(function(item, index, array) {
    console.log(item, index);
});
console.log(fruits)
var newLength = fruits.unshift('Strawberry') // add to the front
fruits.forEach(function(item, index, array) {
    console.log(item, index);
});
console.log(newLength)

var newLength = fruits.push('Mango');
fruits.forEach(function(item, index, array) {
    console.log(item, index);
});
console.log(newLength)

var pos = fruits.indexOf('Banana');
console.log(pos)

console.log(fruits)
var removedItem = fruits.splice(pos, 1); // this is how to remove an item
console.log(removedItem)
console.log(fruits)

var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables); 

var pos = 1, n = 2;
var removedItems = vegetables.splice(pos, n); 
// this is how to remove items, n defines the number of items to be removed,
// from that position(pos) onward to the end of array.

console.log(vegetables); 
console.log(removedItems); 

var shallowCopy = fruits.slice(); // this is how to make a copy
console.log(fruits)
console.log(shallowCopy)


// ARRAY EMPTY NON_ZERO LENGTH
arrayLength=10
var arr = new Array(arrayLength);
console.log(arr)
var arr = Array(arrayLength);
console.log(arr)

// This has exactly the same effect
var arr = [];
arr.length = arrayLength;
console.log(arr)

var obj = {};
console.log(obj)
var element0 = new Array(arrayLength)
var element1 = new Array(arrayLength)
var elementN=[]; elementN.length = arrayLength;
// ...
obj.prop = [element0, element1, elementN];
console.log(obj)

// OR
var obj = {prop: [element0, element1, elementN]};
console.log(obj)

var arr = [42];      // Creates an array with only one element:
                     // the number 42.
                     console.log(arr)
                     console.log(arr.length)

var arr = Array(42); // Creates an array with no elements
                     // and arr.length set to 42; this is
                     // equivalent to:
                     console.log(arr)
                     console.log(arr.length)
var arr = [];
arr.length = 42;
                    console.log(arr)
                    console.log(arr.length)
//es2015
let wisenArray = Array.of(9.3);  // wisenArray contains only one element 9.3
console.log(wisenArray)

var emp = [];
emp[0] = 'Casey Jones';
emp[1] = 'Phil Lesh';
emp[2] = 'August West';

var arr = [];
arr[3.4] = 'Oranges';
console.log(arr.length);                // 0
console.log(arr.hasOwnProperty(3.4));   // true
console.log(arr[3.4])

var myArray = new Array('Hello', arr, 3.14159);
console.log(myArray)
var myArray = ['Mango', 'Apple', 'Orange'];
console.log(myArray)

// zero based array length
var cats = [];
cats[30] = ['Dusty'];
console.log(cats.length); // 31
var cats = ['Dusty', 'Misty', 'Twiggy'];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // logs "Dusty, Misty" - Twiggy has been removed

cats.length = 0;
console.log(cats); // logs []; the cats array is empty

cats.length = 3;
console.log(cats); // logs [ <3 empty items> ]

var colors = ['red', 'green', 'blue'];
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

/**If you know that none of the elements in your array 
 * evaluate to false in a boolean context — 
 * if your array consists only of DOM nodes,
 *  for example, you can use a more efficient idiom:
 * This avoids the overhead of checking the length of the array, 
 * and ensures that the div variable is reassigned to the current item 
 * each time around the loop for added convenience.
 * 
 */

//var divs = document.getElementsByTagName('div');
//for (var i = 0, div; div = divs[i]; i++) {
  /* Process div in some way */
//}
var colors = ['red', 'green', 'blue'];
colors.forEach(function(color) {
  console.log(color);
});

//ES2015 arrow
var colors = ['red', 'green', 'blue'];
colors.forEach(color => console.log(color));

var array = ['first', 'second', , 'fourth'];

array.forEach(function(element) {
  console.log(element);
});
// first
// second
// fourth

console.log(array)
if (array[2] === undefined) { 
  console.log('array[2] is undefined'); // true
} 

array = ['first', 'second', undefined, 'fourth'];
console.log(array)

array.forEach(function(element) {
  console.log(element);
})

var myArray = new Array('1', '2', '3');
console.log(myArray)
myArray = myArray.concat('a', 'b', 'c'); 
console.log(myArray)

var myArray = new Array('Wind', 'Rain', 'Fire');
console.log(myArray)
var list = myArray.join(' - '); // list is "Wind - Rain - Fire"
console.log(list)

var myArray = new Array('1', '2');
myArray.push('3'); // myArray is now ["1", "2", "3"]
console.log(myArray)

var myArray = new Array('1', '2', '3');
var last = myArray.pop(); 
console.log(myArray)

var myArray = new Array('1', '2', '3');
var first = myArray.shift(); 
console.log(myArray)

var myArray = new Array('1', '2', '3');
myArray.unshift('4', '5'); 
console.log(myArray)

var myArray = new Array('a', 'b', 'c', 'd', 'e');
myArray = myArray.slice(1, 4); // starts at index 1 and extracts all elements
                               // until index 3, returning [ "b", "c", "d"]
console.log(myArray)

var myArray = new Array('1', '2', '3', '4', '5');
myArray.splice(1, 3, 'a', 'b', 'c', 'd'); 
console.log(myArray)

var myArray = new Array('1', '2', '3');
myArray.reverse(); 
console.log(myArray)

var myArray = new Array('Wind', 'Rain', 'Fire');
myArray.sort(); 
console.log(myArray)

//sort by the last letter of a string:
var sortFn = function(a, b) {
    if (a[a.length - 1] < b[b.length - 1]) return -1;
    if (a[a.length - 1] > b[b.length - 1]) return 1;
    if (a[a.length - 1] == b[b.length - 1]) return 0;
  }
myArray.sort(sortFn);
console.log(myArray)

var a = ['a', 'b', 'a', 'b', 'a'];
console.log(a.indexOf('b')); // logs 1
// Now try again, starting from after the last match
console.log(a.indexOf('b', 2)); // logs 3
console.log(a.indexOf('z')); // logs -1, because 'z' was not found

var a = ['a', 'b', 'c', 'd', 'a', 'b'];
console.log(a.lastIndexOf('b')); // logs 5
// Now try again, starting from before the last match
console.log(a.lastIndexOf('b', 4)); // logs 1
console.log(a.lastIndexOf('z')); // logs -1

//forEach(callback[, thisObject]) executes callback 
//on every array item and returns undefined.
var a = ['a', 'b', 'c'];
a.forEach(function(element) { console.log(element); }); 

//map(callback[, thisObject]) returns a new array 
//of the return value from executing callback on every array item.
var a1 = ['a', 'b', 'c'];
var a2 = a1.map(function(item) { return item.toUpperCase(); });
console.log(a2); 

/**
 * filter(callback[, thisObject]) returns a new array 
 * containing the items for which callback returned true.
 * 
 */
var a1 = ['a', 10, 'b', 20, 'c', 30];
var a2 = a1.filter(function(item) { return typeof item === 'number'; });
console.log(a2); 


// every
function isNumber(value) {
    return typeof value === 'number';
  }
  var a1 = [1, 2, 3];
  console.log(a1.every(isNumber)); // logs true
  var a2 = [1, '2', 3];
  console.log(a2.every(isNumber)); // logs false

// at least one = some
function isNumber(value) {
    return typeof value === 'number';
  }
  var a1 = [1, 2, 3];
  console.log(a1.some(isNumber)); // logs true
  var a2 = [1, '2', 3];
  console.log(a2.some(isNumber)); // logs true
  var a3 = ['1', '2', '3'];
  console.log(a3.some(isNumber)); // logs false

/**
 * reduce(callback[, initialValue]) applies callback(firstValue, secondValue) 
 * to reduce the list of items down to a single value and returns that value.
 * 
 */
var a = [10, 20, 30];
var total = a.reduce(function(first, second) { return first + second; }, 0);
console.log(total) // Prints 60
/**reduceRight(callback[, initialValue]) works like reduce(), 
 * but starts with the last element.
 * reduce and reduceRight are the least obvious of the iterative array methods. 
 * They should be used for algorithms that combine two values recursively
 *  in order to reduce a sequence down to a single value. 
 * */
var a = [10, 20, 30];
var total = a.reduceRight(function(first, second) { return first + second; }, 0);
console.log(total) // Prints 60

var a = ['CAT', 'DOG', 'horse'];
var total = a.reduce(function(first, second) { return first + second; }, 'SILAKKA_');
console.log(total) 
var total = a.reduceRight(function(first, second) { return first + second; }, 'SILAKKA_');
console.log(total) 
var total = a.reduceRight(function(first, second) { return first + second; });
console.log(total) 

//MULTI-DIMENSIONAL ARRAYS
var a = new Array(4);
for (i = 0; i < 4; i++) {
  a[i] = new Array(4);
  for (j = 0; j < 4; j++) {
    a[i][j] = '[' + i + ', ' + j + ']';
  }
}
console.log(a)
/**
 * ​​​​​[ [ '[0, 0]', '[0, 1]', '[0, 2]', '[0, 3]' ],​​​​​
​​​​​  [ '[1, 0]', '[1, 1]', '[1, 2]', '[1, 3]' ],​​​​​
​​​​​  [ '[2, 0]', '[2, 1]', '[2, 2]', '[2, 3]' ],​​​​​
​​​​​  [ '[3, 0]', '[3, 1]', '[3, 2]', '[3, 3]' ] ]​​​​​
  at ​​​a​​​ ​basics.js:647:0​
 */
function printArguments() {
    Array.prototype.forEach.call(arguments, function(item) {
      console.log(item);
    });
  }
  Array.prototype.forEach.call('a string', function(chr) {
    console.log(chr);
  });


//OBJECTS AND PROPERTIES
var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
myCar.color; // undefined
/**
 * Properties of JavaScript objects can also be accessed or set 
 * using a bracket notation (for more details see property accessors).
 *  Objects are sometimes called associative arrays, since each property 
 * is associated with a string value that can be used to access it. 
 * So, for example, you could access the properties of the myCar object as follows:
 * 
 */
myCar['make'] = 'Ford';
myCar['model'] = 'Mustang';
myCar['year'] = 1969;

// four variables are created and assigned in a single go, 
// separated by commas
var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

myObj.type              = 'Dot syntax';
myObj['date created']   = 'String with space';
myObj[str]              = 'String value';
myObj[rand]             = 'Random Number';
myObj[obj]              = 'Object';
myObj['']               = 'Even an empty string';

console.log(myObj);
/**
 * ​​​​​{ type: 'Dot syntax',​​​​​
​​​​​  'date created': 'String with space',​​​​​
​​​​​  myString: 'String value',​​​​​
​​​​​  '0.9165862344980718': 'Random Number',​​​​​
​​​​​  '[object Object]': 'Object',​​​​​
​​​​​  '': 'Even an empty string' }​​​​​

 */
var propertyName = 'make';
myCar[propertyName] = 'Ford';

propertyName = 'model';
myCar[propertyName] = 'Mustang';

function showProps(obj, objName) {
    var result = '';
    for (var i in obj) {
      // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
      if (obj.hasOwnProperty(i)) {
        result += objName + '.' + i + ' = ' + obj[i] + '\n';
      }
    }
    return result;
  }
rex = showProps(myCar, "myCar")
console.log(rex)

//ENUMERATE OBJECT PROPERTIES
/**
 * Starting with ECMAScript 5, there are three native ways to list/traverse object properties:

    for...in loops
    This method traverses all enumerable properties of an object and its prototype chain
    Object.keys(o)
    This method returns an array with all the own (not in the prototype chain) enumerable properties' names ("keys") of an object o.
    Object.getOwnPropertyNames(o)
    This method returns an array containing all own properties' names (enumerable or not) of an object o.


 */

function listAllProperties(o) {
	var objectToInspect;     
	var result = [];
	
	for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {  
      result = result.concat(Object.getOwnPropertyNames(objectToInspect));  
	}
	
	return result; 
}

fff=listAllProperties(obj)
console.log(fff)

//continue from creating new objects
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Using_object_initializers

//continue from literals
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Data_type_conversion

