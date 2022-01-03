//class based prototypal inheritance
class Shape {
  constructor(shape) {
    this.shape = shape;
  }
  getShapeName() {
    return this.shape;
  }
}
let shape1 = new Shape('Circle');
/*
  Now we can add new property even though
  we've create object already.
*/
Shape.prototype.getArea = () => console.log('Calculate shape area..');

console.log(shape1.getShapeName());
console.log(shape1.getArea());


/*
  We can also create new object type and this new type
  can also inherits properties from shape object.
*/

class ShapeChild extends Shape {
  constructor(shape) {
    super(shape);
  }
  getDiameter() {
    console.log('Calculate diameter..')
  }
}

let shape2 = new ShapeChild('Square');
console.log(shape2.getShapeName());
console.log(shape2.getDiameter())