console.log("/**************************Object create and entries samples*******************/");

const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};
  

console.log(" Person Object before object creation :" + JSON.stringify(person));
const me = Object.create(person);

console.log("New object created using object create method :" + JSON.stringify(me));
  

  me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
  
  me.isHuman = true; // inherited properties can be overwritten
  console.log("person printIntroduction using me object :" +me.isHuman);
  me.printIntroduction()

  // expected output: "My name is Matthew. Am I human? true"

  console.log("*******************Classical inheritance*******************************");


  // Shape - superclass
function Shape() {
    this.x = 1;
    this.y = 2;
  }


  console.log("Shape constructor :" + Shape);
  console.log("Shape constructor function :" + Shape());
  console.log("Shape constructor function using new  :" + JSON.stringify(new Shape()));

  
  // superclass method
  Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
  };
  
  // Rectangle - subclass
  function Rectangle() {
    Shape.call(this); // call super constructor.
  }
  
 //var rectangle = new Rectangle();




  // subclass extends superclass
  Rectangle.prototype = Object.create(Shape.prototype);
  Rectangle.prototype.constructor = Rectangle;
  
  var rect = new Rectangle();

  console.log(" Rectangle object :" + JSON.stringify(rect));
  console.log(" calling Shape class y variable using rectangle :" + rect.y);
  
  console.log('Is rect an instance of Rectangle?',
    rect instanceof Rectangle); // true
  console.log('Is rect an instance of Shape?',
    rect instanceof Shape); // true
  rect.move(1, 1); // Outputs, 'Shape moved.'