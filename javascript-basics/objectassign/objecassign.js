console.log("/********************************Object assign sample**********************************/");

let objectAssignTest = {

    a : "a",
    b :"b",
    c:"c"
}


var copiedObject = Object.assign(objectAssignTest, {d :"d",e :"e"});


const sourceObj1 = {
    f:"f",
    g:"g",
    h:"h"

}

var sourceObj2 = {
    i:"i",
    j:"j",
    h:"k"

}

copiedObject = Object.assign(objectAssignTest,sourceObj1,sourceObj2);

console.log("After copied using object assign :"+ JSON.stringify(copiedObject));


console.log("**************************cloning object******************************");

var obj = { a: 1 };
var emptyObjectCopy = Object.assign({}, obj); // empty source

console.log("emptyObjectCopy test :" + JSON.stringify(emptyObjectCopy)); // { a: 1 }

//var nullObjSource = Object.assign(null, obj);  // error can not convert null to object

//console.log("nullObjSource test : "+nullObjSource);


//var undefinedObj = Object.assign(undefined, obj);  // error can not convert undefined to object

//console.log("undefinedObj test :"+undefinedObj);

console.log("/*******************************Shallo Copy feature of assign***********************/");

  let originalObj = { a: 0 , b: { c: 0}};

  let copiedObj = Object.assign({}, originalObj);

  console.log("Original Source Object :" + JSON.stringify(originalObj));

  console.log("Copied Object :" +JSON.stringify(copiedObj)); // { a: 0, b: { c: 0}}

  originalObj.a = 1; // updating original object

  console.log("Original Source Object after original object updated :" + JSON.stringify(originalObj));

  console.log("Copied Object after original object updated :" +JSON.stringify(copiedObj)); 

  copiedObj.a=2; // only copied object will effect

  console.log("Original Source Object after copied object updated :" + JSON.stringify(originalObj));

  console.log("Copied Object after copied object updated :" +JSON.stringify(copiedObj)); 

  originalObj.b.c =7; // both original and copied objects updating

  console.log("Original Source Object after original complex object updated :" + JSON.stringify(originalObj));

  console.log("Copied Object after original complex object updated :" +JSON.stringify(copiedObj)); 

  copiedObj.b.c = 15; //both original and copied objects updating

  console.log("Original Source Object after copied complex object updated :" + JSON.stringify(originalObj));

  console.log("Copied Object after copied complex object updated :" +JSON.stringify(copiedObj)); 

  console.log("/*******************************Deep Copy feature of assign***********************/");

  var deepCopyOriginal = { a: 0 , b: { c: 0}};
  let deepCopyCopied = JSON.parse(JSON.stringify(deepCopyOriginal));
  deepCopyOriginal.a = 4;
  deepCopyOriginal.b.c = 4;
  console.log(JSON.stringify("Deep copy using json parse and stringify :"+JSON.stringify(deepCopyCopied))); // { a: 0, b: { c: 0}}


  console.log("**********************Prototype and non enumerable property wont copied***********");

  var obj = Object.create({ foo: 1 }, { // foo is on obj's prototype chain.
            bar: {
                value: 2  // bar is a non-enumerable property.
            },
            baz: {
                value: 3,
                enumerable: true  // baz is an own enumerable property.
            }
            });

var prototypeEnumerableObj = Object.assign({}, obj);
console.log("prototypeEnumerableObj :" + JSON.stringify(prototypeEnumerableObj)); // { baz: 3 }


console.log("/***************************primitives ********************************/");

var v1 = 'abc';
var v2 = true;
var v3 = 10;
var v4 = Symbol('foo');
//var o7 = { [Symbol('hi')]: 7 };  // print without JSON.stringify


var primitiveObj = Object.assign({},v1,v2,v3,v4); 
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.

console.log(primitiveObj); // { "0": "a", "1": "b", "2": "c" }


console.log("**********************Symbol typed properties**********************************");

var o1 = { a: 1 };
var o2 = { [Symbol('foo')]: 2 };

var symbolObj = Object.assign({},  o1, o2);
console.log(symbolObj); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
Object.getOwnPropertySymbols(symbolObj); // [Symbol(foo)]


console.log("*********************Exception breaks the copy**************");

var target = Object.defineProperty({}, 'foo', {
    value: 1,
    writable: false
  }); // target.foo is a read-only property
  
  //Object.assign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 }); // error since the property in target is already non writable
  //Object.assign(target, { bar: 2 }, { foo2: 3, foo3: 3 }, { baz: 4 });
  // TypeError: "foo" is read-only
  // The Exception is thrown when assigning target.foo
  
  console.log(target.bar);  // 2, the first source was copied successfully.
  console.log(target.foo2); // 3, the first property of the second source was copied successfully.
  console.log(target.foo);  // 1, exception is thrown here.
  console.log(target.foo3); // undefined, assign method has finished, foo3 will not be copied.
  console.log(target.baz);  // undefined, the third source will not be copied either.