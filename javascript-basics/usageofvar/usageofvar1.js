console.log("name from usageofvar :" + name);
console.log("Name1 from usageof var file :" + name1);
//console.log("Name2 from usageof var file :" + name2);
console.log("Name3 from usageof for this key test :" + this.name3);
console.log("constVariable from usageof var " + constVariable);
console.log("letGlobalVariable " + letGlobalVariable);

{

    var a ="one";
    b = "two";
    let c = "three";
    const d = "four";

}
console.log("******************************using this*********** ");
console.log("var using this inside block : "+this.a);
console.log("global using this inside block: "+this.b);
console.log("let using this inside block: "+this.c);
console.log("const using this inside block: "+this.d);
console.log("******************************using window*********** ");
console.log("var using window inside block: "+window.a);
console.log("global using window inside block: "+window.b);
console.log("let  using window inside block: "+window.c);
console.log("const using window inside block: "+window.d);

console.log("******************************normal*********** ");
console.log("var inside block: "+a);
console.log("global inside block: "+b);
//console.log("let inside block: "+c);  // Reference id c is not defined error
//console.log("const inside block: "+d);   // Reference id d is not defined error

function thisWindowNormalVariableTest(){
    f = "six";
    var e ="five";
    let g = "seven";
    const h = "eight";
}

console.log("******************************using this*********** ");
console.log("var using this inside function : "+this.e);
console.log("global using this inside function: "+this.f);
console.log("let using this inside function: "+this.g);
console.log("const using this inside function: "+this.h);
console.log("******************************using window*********** ");
console.log("var using window inside function: "+window.e);
console.log("global using window inside function: "+window.f);
console.log("let  using window inside function: "+window.g);
console.log("const using window inside function: "+window.h);

console.log("******************************normal error for all not defined*********** ");
//console.log("var inside function: "+e); e is not defined
//console.log("global inside function: "+f); f id not defined
//console.log("let inside function: "+g);  // Reference id c is not defined error
//console.log("const inside function: "+h);   // Reference id d is not defined error


(function IIFE_init() {  
    lives=0;  
    this.name = "latha"  ;
   init();    
   function init() {
       lives = 5;
       weapons = 10;
       console.log("this.name :" + this.name);
   }
}()); console.log(lives)