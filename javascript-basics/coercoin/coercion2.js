console.log("===================================Second level coercion Abstract operations===========================")



var test = null;
//console.log(test.toString()); // error for null
console.log("toString(null) :" + toString(test));

test = undefined;
//console.log(test.toString()); // error for undefined
console.log("toString(undefined) :" + toString(test));

test = true;
console.log("toString(true) :" + toString(test)); // on number and boolean
console.log("test.toString():" + test.toString());//

test = 0;
console.log("For 0 :" + test.toString()); // 0

test = -0;
console.log("for -0 :" + test.toString()); //0

test = -6;
console.log("For number -6:" + test.toString()); // -6



console.log("=================================== On array toString usage===========================")


var arrayTest = [];
console.log("[].toString() : " +arrayTest.toString()); // "" empty string

arrayTest = [1,2,3];
console.log("[1,2,3].toString() :" +arrayTest.toString()); // "1,2,3"

arrayTest = [null];
console.log("[null].toString() :"+arrayTest.toString()); // ""

arrayTest = [undefined];
console.log("[undefined].toString() :"+arrayTest.toString()); // ""

arrayTest = [null, undefined];
console.log("[null, undefined].toString() :"+arrayTest.toString()); // ","

arrayTest = [[[],[],[]],[],[[],[]],[]];
console.log("[[[],[],[]],[],[[],[]],[]].toString() :"+arrayTest.toString());// total 8 but only 7 ",,,,,,,"


arrayTest = [,,,,];
console.log("[,,,,].toString() :"+arrayTest.toString()); // ,,,

arrayTest= [{}];
console.log("[{}].toString() :"+arrayTest.toString()); // [Object object]
console.log(toString({})); // [Object undefined]


arrayTest= [{a:7}];
console.log("[{a:7}].toString() :"+arrayTest.toString()); // [Object object]


console.log("======================== toNumber usage on primitives===========================")

console.log("-------------- ''  :" + Number("")); // 0

console.log("-------------- '0' :" +Number("0")); // 0

console.log("-------------- string '-0' :" +Number("-0")); //0

console.log("-------------- '-0' :" +Number(-0)); // 0

console.log("-------------- null :" +Number(null)); // 0

console.log("-------------- undefined :" +Number(undefined)); // NaN

console.log("-------------- String . :" +Number(".")); // NaN

console.log("-------------- hexa decimal  :" +Number("0x5")); //5

console.log("-------------- 00009 :" +Number("00009")); // 9

console.log("-------------- 0. :" +Number("0.")); // 0

console.log("-------------- .0 :" +Number(".0")); //0

console.log("-------------- 3.14159 :" +Number("3.14159")); // 3.14159

console.log("======================== toNumber usage on objects ===========================")

console.log(Number({a:7})); // NaN

console.log("======================== toNumber usage on Arrays ===========================")


console.log("Number([''])  : " +Number([""])); // 0

console.log("Number([null])  : " +Number([null])); //0

console.log("Number([undefined])  : " +Number([undefined])); // 0

console.log("Number([1])  : " +Number([1])); // 1

console.log("Number(['1'])  : " +Number(["1"])); // 1

console.log("Number([1,2,3])  : " +Number([1,2,3])); // NaN

console.log("Number([0])  : " +Number([0])); // 0

console.log("Number([-0])  : " +Number([-0])); // 0 // Developer tools you will get -0

console.log("Number(['-0'])  : " +Number(['-0'])); // 0

console.log("Number(['0'])  : " +Number(['0'])); // 0

console.log("Number([[[[[[]]]]]])  : " +Number([[[[[[]]]]]])); // 0

console.log("======================== toNumber usage on Booleans ===========================")

console.log("Boolean falsy '':" + Boolean("")); 

console.log("Boolean falsy 0:" + Boolean(0)); // 

console.log("Boolean falsy -0:" + Boolean(-0));

console.log("Boolean falsy null:" + Boolean(null));

console.log("Boolean falsy undefined :" + Boolean(undefined));

console.log("Boolean falsy NaN :" + Boolean(NaN));

console.log("Boolean falsy false :" + Boolean(false));



console.log("Boolean truthy  true :" + Boolean(true));

console.log("Boolean truthy  foo :" + Boolean("foo"));

console.log("Boolean truthy  23 :" + Boolean(23));

console.log("Boolean truthy  {1,3} :" + Boolean({1:3}));

console.log("Boolean truthy  [] :" + Boolean([]));

console.log("Boolean truthy  [1,2] :" + Boolean([1,2]));

console.log("Boolean truthy  function(){} :" + Boolean(function(){}));


console.log("======================== Boolean on logical operators  ===========================")

console.log("Boolean logical operators :" + ('abc' || 123 )); //'abc'

console.log("Boolean logical operators :" + ( true || 456 ));

console.log("Boolean logical operators :" + ( false || 789 ));

console.log("Boolean logical operators :" + ( false && true ));

console.log("Boolean logical operators :" + ( true && false ));

console.log("Boolean logical operators :" + ( false && 'abc' ));

console.log("Boolean logical operators :" + ( '' && 'abc' ));

console.log("Boolean logical operators :" + ( 'def' && 'abc' ));
