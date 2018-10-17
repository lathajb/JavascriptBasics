name ="lata";

const constVariable = "testVariable";

let letGlobalVariable = "letGlobalVariabletest";

{
    console.log("I am from block");
}

console.log("***********************Immediately invoked funciton expression************************");

(function($){
    name1 = "deepu";
    var name2 ="karthik";
    this.name3 ="jaanu"
    let letVaribale = "letVariable";
    const constVariable = "constVaraibale";


    $(function(){
        console.log(" Name define :" + name2 + " let define :" + letVaribale);
    })


    console.log("****************** let and var Redeclaration test section starts*******************");
    let testOne ="abe";
    //let testOne ="bcd"; // error 

    console.log("Redeclaration  let :" +testOne);

    var testTwo = "testTwo";
    var testTwo ="testthree"; // will override

    console.log("Redeclaration var :" +testTwo);
    console.log("****************** let and var Redeclaration test section ends*******************");


}(jQuery)); // Immediately invoked funciton expression



console.log("Name1 global variable if IIFE accessing out side :" + name1);
console.log("this.name3 variable if IIFE accessing out side :" + this.name3);
//console.log("Name2 from usageof var file :" + name2);  // error
//console.log("var Name2  : let variable :" +letVaribale); // error
console.log("constVariable variable if IIFE accessing out side :" + constVariable);


function test(){
    globalTest = "testGlobal inside function";
    var helloFunction = "hello function inside test method";  
}

//console.log("helloFunction :" + helloFunction); // error helloFunction is not defined
//console.log("globalTest :" + globalTest); // error 


console.log("/****************************Const variable usage starts*********************** */");

const simpleExample = { name : "latha"};
const simpleConstExample2 = "45";
const constObjectExample = {

                            emp1: {
                                name:"deepu"
                            },
                            emp2 :{
                                name:"karthik"
                            }

                        }
//simpleExample = { name: "suji"}; // error
//simpleExample.name = "hello";  
//simpleConstExample2 = "";
//simpleExample = constObjectExample; // error


constObjectExample.emp1.name = "jaanu";
console.log("Const variable usage for simpleExample" +JSON.stringify(simpleExample));
console.log("Const variable usage for simpleExample" +simpleConstExample2);
console.log("Const variable usage for constObjectExample" +JSON.stringify(constObjectExample));

console.log("/****************************Const variable usage ends*********************** */");