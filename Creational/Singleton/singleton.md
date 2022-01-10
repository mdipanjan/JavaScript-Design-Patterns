<div align="center">
	<h3>Singleton Pattern in JavaScript</h3>
  <p> This is a class based creational design pattern where single classes can be instantiated and we can use that globally. This single instance can be used throughout the applcation.</p>
</div>

```js
  let counter = 0;
  let instance;
  class Counter {
    constructor() {
      if(instance) {
        throw new Error('Instance already present')
      }
      instance = this;
    }
    getInstance() {
      return this;
    }
    getCount() {
      return counter;
    }
    increment() {
      return ++counter;
    }
    decrement() {
      return --counter;
    }

  }
  let counter1 = new Counter();
  let counter2 = new Counter();
  // Uncaught Error: Instance already present
  console.log(counter1.getCount());
```