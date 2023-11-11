class Pony {
  constructor(color) {
    this.color = color;
  }
  toString() {
    return `${this.color} pony`;
    // see that? It is another cool feature of ES2015, called template
    literals;
    // we'll talk about these quickly!
  }

  static defaultSpeed() {
    return 10;
  }

  get color() {
    console.log("get color");
    return this._color;
  }

  set color(newColor) {
    console.log(`set color ${newColor}`);
    this._color = newColor;
  }


}
const bluePony = new Pony("blue");
console.log(bluePony.toString()); // blue pony


