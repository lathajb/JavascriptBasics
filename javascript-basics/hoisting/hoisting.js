

console.log("***************************Hoising Sample****************************");

console.log(hoistTest);
var hoistTest = "hoistTest";

hoistDeclare = "defining here working";
console.log("Declaring and defining later :" + hoistDeclare);
var hoistDeclare;


console.log("********************Function declaration and expression hoisting****************");

//console.log(defining());  // will work

function defining(){
    console.log("I am from function declaration approach");
}

//console.log(defining());  // it will work

//console.log("Function expression hoisting before : " +functionExpression(1,7) ); // through expression TypeError: functionExpression is not a function

var functionExpression = function(name){
  return name;
}

var functionExpression = function(a,b){
    return a+b;
}

console.log("Function expression hoisting after: " +functionExpression(15) );