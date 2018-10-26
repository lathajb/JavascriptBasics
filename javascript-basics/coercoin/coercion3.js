console.log("===================================Third level coercion Abstract operations===========================")

console.log("===================================Explicit String and number conversion===========================")


var stringToNumConv = "123";

//stringToNumConv = "123trtr"; // it will remove addtional text pring only number

//stringToNumConv = "trtr123"; // NaN

var stringToNumConv1 = parseInt(stringToNumConv, 10); // its parsing technique
console.log("Explicit String and number conversion : " +typeof stringToNumConv1);

console.log("Explicit String and number conversion : " + stringToNumConv1);
console.log("Explicit String and number conversion : " +typeof stringToNumConv1);

stringToNumConv1 = Number(stringToNumConv); // explicit coercion
console.log("Explicit String and number conversion : " + stringToNumConv1);
console.log("Explicit String and number conversion : " +typeof stringToNumConv1);


stringToNumConv1 = +stringToNumConv; // explicit coercion
console.log("Explicit String and number conversion : " + stringToNumConv1);
console.log("Explicit String and number conversion : " +typeof stringToNumConv1);


stringToNumConv = 4456;
stringToNumConv1 = stringToNumConv.toString(); // its both implicit and explicit
console.log("Explicit String and number conversion : " + stringToNumConv1);
console.log("Explicit String and number conversion : " +typeof stringToNumConv1);


stringToNumConv1 = String(stringToNumConv); // recommended
console.log("Explicit String and number conversion : " + stringToNumConv1);
console.log("Explicit String and number conversion : " +typeof stringToNumConv1);

console.log("===================================Explicit Boolean conversion===========================")

var booleanExp = "booleanValExist";
var convertedVal = Boolean(booleanExp);
console.log("Explicit Boolean coercion using Boolean function: " + convertedVal);


convertedVal = !!booleanExp;
console.log("Explicit Boolean coercion using nagation: " + convertedVal);


convertedVal = booleanExp ? true : false; // explicitly implicit
console.log("Explicit Boolean coercion using conditional operator : " + convertedVal);

console.log("===================================Explicit Date conversion===========================")

var date = new Date();
console.log("Explicit Date coercion: " + date);

date = +new Date();
console.log("Explicit Date coercion using +new : " + date); // convertion to timestamp

date = Date.now();
console.log("Explicit Date coercion using Date.now(): " + date); // convertion to timestamp in ES5

var foo = "foo";
if(~foo.indexOf("f")){
    console.log("Found it!!!!");
}
