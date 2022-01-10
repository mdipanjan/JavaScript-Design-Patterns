<div align="center">
	<h3>Prototype Pattern in JavaScript</h3>
  <p> This is a creational design pattern which uses JavaScript's native prototypal inheritance. The idea here is to use a skeleton of an existing object to create instances.</p>
</div>



```js

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


```
 We can also create new object type and this new type can also inherits properties from shape object.

```js
  //Shape child inherits properties from Shape parent
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
```