console.log("/******************************Object create and values samples*******************");

var objCreate = {

    one : "one",
    two : "two",
    three : "thress"
}

objCreate.six = 'six';
objCreate['seven'] = 'severn';

// adding new property using prototype 
objCreate.__proto__.four = "four"; // it wont be availble for object values

console.log(objCreate.four);

Object.defineProperty(objCreate, 'five' ,{
    value :'five',
    enumerable : false
})


console.log("Before using Object values :" + JSON.stringify(objCreate)); // one, two, thress, four

var result = Object.values(objCreate);

console.log("After using Object values :" + JSON.stringify(result)); // one,two, thress


console.log("/*************************** Object values ******************************************/");


var result = Object.entries(objCreate);

console.log("After using Object entries :" + JSON.stringify(result));