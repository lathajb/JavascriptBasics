'use strict'

console.log("/**************************Mutable and Immutable Sample*********** */");


var mutableObjUsingVar = {
                    familyMembers : {
                        one : {
                            name : "lata"
                        },
                        two :{
                            name: "deepu"
                        }
                    }
                    }  
                    
mutableObjUsingVar.familyMembers.one.name = "karthik";

const mutableObjUsingConst = {
    employees : {
        emp1 : {
            name : "sudheer"
        },
        emp2 :{
            name: "kulayappa"
        }
    }
    }  
    
  
mutableObjUsingConst.employees.emp1.name = "latha";

console.log("mutableObjUsingVar : " + JSON.stringify(mutableObjUsingVar) );
console.log("mutableObjUsingConst : " + JSON.stringify(mutableObjUsingConst) );

console.log("*********************Immutable using object freeze for complex object starts *********");


const usingVarObj = Object.freeze(mutableObjUsingVar);
const usingConstObj = Object.freeze(mutableObjUsingConst);

usingVarObj.familyMembers.one.name = "usingVarObj";  
usingConstObj.employees.emp2.name = "usingConstObj"; 

console.log("mutableObjUsingConst : " + JSON.stringify(usingConstObj) );
console.log("mutableObjUsingVar : " + JSON.stringify(usingVarObj) );

console.log("*********************Immutable using object freeze for complex object ends *********");

console.log("*********************Immutable using object freeze for simple object starts *********");

const object1 = {
    property1: 42
};
  
const object2 = Object.freeze(object1);
console.log(Object.freeze(1));
const object3 = JSON.parse(JSON.stringify(object1));
  
//object2.property1 = 33;
object3.property1 = 10;

console.log("Using freeze :"+JSON.stringify(object2));
console.log("Using parse and stringify  :"+JSON.stringify(object3));

console.log("*********************Immutable using object freeze for simple object ends *********");

console.log("*********************Immutable using parse and stringify for complex object starts *********");

const parseUsingConstObj = JSON.parse(JSON.stringify(mutableObjUsingConst));
const parseUsingVarObj = JSON.parse(JSON.stringify(mutableObjUsingVar));

parseUsingVarObj.familyMembers.two.name = "family member modified";
parseUsingConstObj.employees.emp1.name = "employees changes";

console.log("parseUsingConstObj :"  +JSON.stringify(parseUsingConstObj)); 
console.log("parseUsingVarObj :" + JSON.stringify(parseUsingVarObj)); 

