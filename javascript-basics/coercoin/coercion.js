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



