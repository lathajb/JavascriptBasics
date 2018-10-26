//'use strict'
console.log("*********************************Javascript functions******************************");


// functions can not be involed out side function body trick 1.


var y = function testFunctionNameInvoke() {
  console.log("Inside testFunctionNameInvoke for function expression ");
};
//alert(testFunctionNameInvoke);
//console.log(testFunctionNameInvoke()); // throws error
//testFunctionNameInvoke();// throws error

function testFunctionNameInvoke2(){
    console.log("Inside testFunctionNameInvoke2 for function declaration");
}

testFunctionNameInvoke2();


// trick 2 function declaration hoisting

// Hoisted variable
console.log("Function declaration :" +hello('Aliens')); // => 'Hello Aliens!'  
// Named function
console.log("Function declaration :" + hello.name)       // => 'hello'  
// Variable holds the function object
console.log("Function declaration :" + typeof hello);    // => 'function'  

function hello(name) {  
  return `Hello ${name}!`;
}



// trick 3 - function declaration inside the conditional block - recommended function expression

(function() {
    //'use strict';
    if (true) {
      function ok() {
        return 'true ok';
      }
    } else {
      function ok() {
        return 'false ok';
      }
    }
    console.log("Using function declaration : " + typeof ok === 'undefined'); // => true
    console.log("Using function declaration :" +ok()); // Throws "ReferenceError: ok is not defined"
  })();
//**********************************************************/

(function() {
    'use strict';
    var ok;
    if (true) {
      ok = function() {
        return 'true ok';
      };
    } else {
      ok = function() {
        return 'false ok';
      };
    }
    console.log("Using function expression : "+typeof ok === 'function'); // => true
    console.log("Using function expression : "+ok()); // => 'true ok'
  })();


  // trick 4 

  var getExpressionType = function funName(variable) {  
    console.log(typeof funName === 'function'); // => true
    return typeof variable;
  }

  function getFunctionDeclarationType(){
      console.log(typeof getFunctionDeclarationType === 'function');
  }
  console.log(getExpressionType(3));                    // => 'number'  
  console.log(getFunctionDeclarationType());            // => true and undefined 
  console.log("Functin for function expression : "+getExpressionType.name);                  // => 'funName' 
  console.log("Function for function declaration : "+getFunctionDeclarationType.name);  
  console.log(typeof funName === 'function'); // => false   
  console.log(typeof getFunctionDeclarationTypev === 'function'); // false

// trick 5 Shorthand method definition

var collection = {  
    items: [],
    add(...items) {
      this.items.push(...items);
    },
    get(index) {
      return this.items[index];
    }
  };
  collection.add('C', 'Java', 'PHP');  
  console.log("Shorthand method sample : " +collection.get(1)); // => 'Java' 



// trick 6 computed property or methods

var addMethod = 'add',  
  getMethod = 'get';
var collection = {  
  items: [],
  [addMethod](...items) {
    this.items.push(...items);
  },
  [getMethod](index) {
    return this.items[index];
  }
};
collection[addMethod]('C', 'Java', 'PHP');  
console.log("Computed property and methods using shorthand method : " +collection[getMethod](1)); // => 'Java' 


// trick 7 

console.log("/*********************Function default return type**********************/");

function test(){};
console.log("Default function return :" +test());// undefined



console.log("****************************** Functions property prototype************************");


// Let's create an object o from function f with its own properties a and b:
let f1 = function () {
    this.a = 1;
    this.b = 2;
 }
 let o = new f1(); // {a: 1, b: 2}
 
 // add properties in f function's prototype
 f1.prototype.b = 3;
 f1.prototype.c = 4;
 
 // do not set the prototype f.prototype = {b:3,c:4}; this will break the prototype chain
 // o.[[Prototype]] has properties b and c.
 // o.[[Prototype]].[[Prototype]] is Object.prototype.
 // Finally, o.[[Prototype]].[[Prototype]].[[Prototype]] is null.
 // This is the end of the prototype chain, as null,
 // by definition, has no [[Prototype]].
 // Thus, the full prototype chain looks like:
 // {a: 1, b: 2} ---> {b: 3, c: 4} ---> Object.prototype ---> null
 
 console.log(o.a); // 1
 // Is there an 'a' own property on o? Yes, and its value is 1.
 
 console.log(o.b); // 2
 // Is there a 'b' own property on o? Yes, and its value is 2.
 // The prototype also has a 'b' property, but it's not visited. 
 // This is called Property Shadowing
 
 console.log(o.c); // 4
 // Is there a 'c' own property on o? No, check its prototype.
 // Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.
 
 console.log(o.d); // undefined
 // Is there a 'd' own property on o? No, check its prototype.
 // Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
 // o.[[Prototype]].[[Prototype]] is null, stop searching,
 // no property found, return undefined.

console.log("/**********************Function constructor and factory function differnce*********");

var x = 10;

function createFunction1() {
    var x = 20;
    return new Function('return x;'); // this |x| refers global |x|
}

function createFunction2() {
    var x = 20;
    function f2() {
        return x; // this |x| refers local |x| above
    }
    return f2;
}

var f3 = createFunction1();
console.log(f3());          // 10
var f4 = createFunction2();
console.log(f4()); 



console.log("/**********************Function call function ***************************/");

function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  console.log(new Food('cheese', 5).name);
  // expected output: "cheese"

  console.log("/*********************Invoking constrcutor of object ***********************/");

  function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    this.category = 'food';
    Product.call(this, name, price);
  }
  
  function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'toy';
  }
  
  var cheese = new Food('feta', 5); // arguments as argument list
  var fun = new Toy('robot', 40);

  console.log("Calling Food  construnctor obj " + JSON.stringify(cheese));
  console.log("Calling Toy  construnctor obj " + JSON.stringify(fun));

  console.log("/***********Using call to invoke a function and without specifying the first argument***********/")

    var sData = 'Wisen';
            
    function display() {  // no error if no strict mode and this will be treats as global
         //this.testVar = "testVar"  // error can not set property testVar of undefined if strict mode
         //console.log('sData value is %s ', this.sData); // error can not set property testVar of undefined if strict mode
    }

    function TestVar(){
        //this.result = "rsult"
        //console.log('sData value is %s ', this.result);
    }

  TestVar.call();  

  display.call();  // sData value is Wisen
  
  function callMethod(){
      var one = 'one var';
      this.two = 'two this';
      let three = 'three let'

    //   var helloFunction = function(){
    //       console.log("hello function"+ one);
    //       return "hi";
    //   }
      return new Function('return helloFunction()')
      
  };


  var resutl = new callMethod();
  //var result2 = resutl.helloFunction();
  //console.log(" Result  :" + result2);



  console.log("/******************Different types of functions************************/");
  // first one -------------------------------------------------------------
  function greet() {
    console.log("Hello, World!");
  }

  greet();


  // functions with parameters and usage of function arguments-------------

  function greet(name,add) {
    console.log(`Hello, ${name}! ${add}`);
  }

  greet("Sammy");
  greet("Latha","ctr");

 function argumentsTest(){
     console.log('Arguments from argumentsTest :'+ arguments[0],arguments[1]);
 }

 argumentsTest("Chandra","Dubai");

 // 3. function definition ---------------------------------------------------

 function add(x, y) {
    return x + y;
}
console.log("Function execution using definition :" +add(9, 7));
console.log("Function execution using definition :" +add(9));


// 4. function expression --------------------------------------------------

const sum = function add(x, y) {
    return x + y;
}

console.log("Function execution using expression :" + sum(20, 5));


// 5. Annonomous function --------------------------------------------------

const sumAnnonomous = function(x, y) {
    return x + y;
}

console.log("Function execution using annonomous function :" +sumAnnonomous(100, 3));

// 6. arrow function -------------------------------------------------------

const square = x => {
    return x * x;
}
console.log("Function execution using arrow function :" +square(8));

// 7. IIFE  - Immediate Invoke Functional expression

(function() {
    console.log("I am from IIFE");
})();

// 8. Using Function Constructor - not recommended -- it needs the function body as a string

var multiply = new Function('x', 'y', 'c = x* y', 'return c');

console.log("I am invoked using Function constructor : " + multiply);
console.log("I am invoked using Function constructor : " + multiply(4,7));

var foo = (new Function("var bar = \'FOO!\';\n return(function() { \n\t console.log(bar);\n});"))();
console.log("Function constructor : "+foo()); 

// 9. block level function 

function normalFunction() { 
    return 1;   // in strict mode
}
 
// block which is having function f

{  
    function normalFunction() { 
      return 2;  // not strict mode
    }
}

// {  
//   var y = function normalFunction() { 
//     return 2;  // not strict mode
//   }
//   console.log(y);
// }

console.log("I am for normal function : " +normalFunction());  

// 10. constructor function


console.log("/****************For Constructor function**********************/");


var Hero = function Hero(name, level) {  // fuction name should be starts with capital 
    this.name = name;
    this.level = level;
}

let hero1 = new Hero('Bjorn', 1);

console.log(" Constructor function :" + JSON.stringify(hero1));

Hero.prototype.add = 'ctr';
console.log(" Constructor After add a property add function :" + JSON.stringify(Hero));


