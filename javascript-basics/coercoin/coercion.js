console.log("/*********************coercoin samples **********************/");

console.log("===========================typeof Operator=======================")

//let testTypeof = 4;
let testTypeof;
console.log("typeof on undefined vairable : " + typeof testTypeof); //undefined
console.log(typeof ''); // string
console.log(typeof ""); // string
console.log(typeof 12); // number
console.log(typeof true); // boolean
console.log(typeof function(){}); // function
console.log(typeof {}); // object
console.log(typeof null);
console.log(typeof undefined);

console.log("===========================typeof Operator trickey=======================")


var typeOfVar;
console.log(typeof typeOfVar);

var bar = typeof bar;
console.log(bar);

bar;
console.log("typeof  bar : "+typeof bar)

console.log("typeof typeof 2 :" +typeof typeof 2); // interview question => string


console.log("===========================Usage of NaN=======================")

var typeOfTest1 =   "hi" /2;

console.log(typeOfTest1);
console.log(typeof typeOfTest1)
console.log("isNaN(typeOfTest1): "+ isNaN(typeOfTest1));
console.log("isNaN('hi1') :"+isNaN("hi1"));
console.log(NaN === NaN);
console.log(Number.isNaN());


console.log("===========================Usage negitive 0=======================")

var negitiveZero = 0/-7; 

var zero = 0/7;

console.log("Negitive zero :"+JSON.stringify(negitiveZero)); // latest browser gives -0 
console.log("Positive zero : "+zero);

console.log(negitiveZero === -0);

console.log(negitiveZero === 0);

console.log(-0 === 0);

console.log(0/9 === 0);

console.log(0/-9 === 0);


function isNegZero(x){

    return x === 0 && (1/x) === -Infinity;
}

console.log(isNegZero(0/7));

console.log(isNegZero(0/-7));

// prefereable way to check negitive zero is use Object.is()
console.log("===========================Usage negitive 0 with Object.is()=======================")
console.log(Object.is("hello", NaN));
console.log(Object.is(NaN, NaN));
console.log(Object.is(0, -0));
console.log(Object.is(-0, -0));
console.log(Object.is(0, 0));

console.log("===========================Usage of typeof scenario =======================")
var baz = 7;
console.log(typeof baz);

var baz;
console.log(typeof baz);

baz = null;
console.log(typeof baz);

baz = "hi" * 7; 
console.log(typeof baz+ " - Value of baz :"+ baz);

baz = 1/0; // Infinity 
console.log(typeof baz + " - Value of baz :"+ baz);

console.log("=========================== Javascriipt natives =======================")

var foo = new String("foo"); // using new  key word

console.log("foo : " + foo);
console.log("foo type of : " + typeof foo); // Object
console.log(" foo instanceof String : " + foo instanceof String); // false
//console.log(" foo instanceof string: " + foo instanceof string); // error 


foo = String("foo");
console.log("foo type of with out new : " + typeof foo);


//foo = Number(8);
foo = Number("89");
console.log("foo type of : " + typeof foo);


foo = new Boolean(false); // object type
foo = Boolean(false); // boolean type
console.log(typeof foo)

if(foo) // if object type it will treat as true only
  console.log("hi foo");

  console.log("=========================== Javascriipt natives Arrays=======================")

  var arrayNative;

  arrayNative = [1,2,3]; // suggested
  console.log("Using  Array initialize [] recommended  : " + arrayNative );

  arrayNative = new Array(1,2,3);

  console.log("Using new Array object not recommended : " + arrayNative );

  arrayNative = new Object();
  arrayNative.a = 1;
  arrayNative.b = 2;
  arrayNative.c = 3;
  console.log("Using new Object not recommended : " + JSON.stringify(arrayNative) );

  arrayNative = {a:1, b:2, c:3};

  console.log("Using Object initiater recommended : " + JSON.stringify(arrayNative ));

  var testArray = new Array(42);

  console.log(testArray);

  console.log("=========================== Javascriipt natives Regular expression =======================")

  var regularExre;

  regularExre = new RegExp("a*b","g"); // dynamic regular expression

  console.log("Dynamic regular expression not recommended: " +regularExre);

  regularExre = /a*b/g;   //static expression

  console.log("Static regular expression recommended : " +regularExre);

  var dateVar = new Date();

  console.log("Java date : " +regularExre);





