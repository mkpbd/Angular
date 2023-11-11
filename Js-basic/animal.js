class Animal {
  speed() {
    return 10;
  }
}
class Pony extends Animal {}
const pony = new Pony();
console.log(pony.speed()); // 10, as Pony inherits the parent method

class Pony1 extends Animal {
  speed() {
    return super.speed() + 10;
  }
}
const pony1 = new Pony1();
console.log(pony.speed()); // 20, as Pony overrides the parent method As;
