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