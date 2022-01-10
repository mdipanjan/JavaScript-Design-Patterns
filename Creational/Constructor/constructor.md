<div align="center">
	<h3>Constructor Pattern in JavaScript</h3>
</div>

```js
  // Function based syntax
  function Car(model, year) {
    this.model = model;
    this.year = year;
    this.getDetails = function() {
      return this.model + ' was Introduced in' + this.year;
    }
  }
  let nexon = new Car('Tata Nexon', 2000);
  console.log(nexon.getDetails());

```

```js

  // ES6 Class based syntax
  class Car{
    constructor(model, year){
      this.model = model;
      this.year = year;
      // methods will be in object itself
      this.printModel = function(){
        return this.model;
      }
    }
    // methods will be in prototype
    getDetails(){
      return this.model + ' was Introduced in' + this.year;
    }
  }
```
