class Circle {
  constructor(radius = 1.0, color = "red") {
    this._radius = radius;
    this._color = color;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (typeof value === "number" && value > 0) {
      this._radius = value;
    } else {
      console.error("Invalid radius value");
    }
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  toString() {
    return `Circle[radius = ${this._radius}, color = ${this._color}]`;
  }

  getArea() {
    return Math.PI * Math.pow(this._radius, 2);
  }

  getCircumference() {
    return 2 * Math.PI * this._radius;
  }
}

const circle = new Circle();
circle.color = "orange";
circle.radius = 2.56; // Make sure this is a number

console.log("Radius =", circle.radius); // Use getter
console.log("Color =", circle.color); // Use getter
console.log("toString =", circle.toString());
console.log("Area of the circle =", circle.getArea());
console.log("Circumference of the circle =", circle.getCircumference());
