'use strict'

console.log("/----------------------------Difference between const and freeze----------------------------/");

console.log("/------- const working principle starts-------------/");

const complexConstObj = {

                one: "one",
                two:"two",
                three:"three",
                four:"four",
                five : "five"
}



console.log("Original const obj :" + JSON.stringify(complexConstObj));

complexConstObj.one = "six";  // can modify complex object property value
complexConstObj.seven ="seven"; // can add new property
delete complexConstObj.two;  // can delete existing property

//complexConstObj = {};  // error can not assign new object

console.log("After Modification const obj :" + JSON.stringify(complexConstObj));

console.log("/------- const working principle ends------------------------/");

console.log("/------- object freeze working principle starts--------------/");

const complexConstForFreezeObj = {

    a: {
        name :"latha"
    },
    b:"b",
    c:"c",
    d:"d",
    e : "e"
}

console.log("Original const obj :" + JSON.stringify(complexConstForFreezeObj));

const freezedObj = Object.freeze(complexConstForFreezeObj);

//freezedObj.b = "f";  // error in strict mode
//freezedObj.g ="g"; // error in strict mode - object can not extendible 
//delete freezedObj.c; // error in strict mode - cannot delete a property
freezedObj.a.name ="deepu";  // able to update in complex object


console.log("After modification const obj :" + JSON.stringify(freezedObj));


console.log("/------- object freeze working principle ends---------------------/");
