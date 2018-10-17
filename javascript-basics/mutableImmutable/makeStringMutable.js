//'use strict'
console.log("*********************How to convert String to mutable *********");


console.log("****************** String literals************************");

// String declaration in two ways

var strLiteral = 'I am a string literal';
 
var strObject = new String('I am a string object');


var originalStrLiteral = 'hello';

console.log("Original to string literal :" + originalStrLiteral);

originalStrLiteral.xyz = 'xyz';  // error in strict mode otherwide undefined
 
console.log("After adding the property to string literal :" + originalStrLiteral.xyz);


var copiedStringLiteral = originalStrLiteral;
 
console.log("After copied to new variable : " +copiedStringLiteral.prop)

console.log("****************** String Objects ************************");

var stringObj = new String('hello');

console.log("Original to string Object :" + stringObj);
stringObj.prop = 'xyz';

console.log("After adding the property to string Obj :" + stringObj.prop);

var copiedStringObj = stringObj;

console.log("After adding the property to string Obj "+copiedStringObj.prop);

var x = new String('foo');
x.toString = function() { return 'foo bar'; };
 
console.log(x); // foo
 
console.log(String(x)); // gives foo bar


/*************************************Ends*************************************/
