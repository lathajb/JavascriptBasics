

console.log("Inside object helper");

/**************************************************************/

// empty object creation


var obj = new Object();

var obj1 = new Object(undefined);

var obj2 = new Object(null);


// var t = 5;
// var a = function(){
//     return(
//         a.load = function(t){
//             return t;
//         }
    
//     )
// }();
//console.log(a.load());

/**************************Self invoking funcitons two ways*/
let one = 1;
(function(){
    console.log("Immediately Invokded Function Expression1");
    let two = 2;
    console.log(" Variable Inside function :" + two );
    console.log(" Variable outside function :" + one );
}());

(function(){
    console.log("Immediately Invokded Function Expression2");
})();

/****************************Module patterns defined using self invokding functions */


var module = (function () {
    // private
    return {
      // public
    };
}());



console.log("Empty object using Object()");
console.log(obj);


console.log("Empty object using Object(undefined)");
console.log(obj1);


console.log("Empty object using Object(null)");
console.log(obj2);
