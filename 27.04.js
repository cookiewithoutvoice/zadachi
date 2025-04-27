1.
class Button {
    constructor(width, height, text) {
        this.width = width;
        this.height = height;
        this.text = text;
    }

    showBtn() {
        document.write(`
            <button style="width: ${this.width}px; height: ${this.height}px;">
                ${this.text}
            </button>
        `);
    }
}

class BootstrapButton extends Button {
    constructor(width, height, text, color) {
        super(width, height, text);
        this.color = color;
    }

    showBtn() {
        document.write(`
            <button class="btn btn-${this.color}" style="width: ${this.width}px; height: ${this.height}px;">
                ${this.text}
            </button>
        `);
    }
}

2.
class Shape {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  displayInfo() {
    return 'фигура: ${this.name}';
  }

  calculateArea() {
    return 0;
  }

  calculatePerimeter() {
    return 0;
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super("квадрат");
    this.sideLength = sideLength;
  }

  displayInfo() {
    return '${super.displayInfo()}, сторона: ${this.sideLength}';
  }

  calculateArea() {
    return this.sideLength * this.sideLength;
  }

  calculatePerimeter() {
    return 4 * this.sideLength;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super("прямоугольник");
    this.width = width;
    this.height = height;
  }

  displayInfo() {
    return '${super.displayInfo()}, ширина: ${this.width}, высота: ${this.height}';
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

class Triangle extends Shape {
  constructor(sideA, sideB, sideC) {
    super("треугольник");
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  displayInfo() {
    return '${super.displayInfo()}, стороны: ${this.sideA}, ${this.sideB}, ${this.sideC}';
  }

  calculatePerimeter() {
    return this.sideA + this.sideB + this.sideC;
  }

  calculateArea() {
    const p = this.calculatePerimeter() / 2;
    return Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
  }
}

const shapes = [
  new Square(5),
  new Rectangle(4, 6),
  new Triangle(3, 4, 5),
  new Square(10),
  new Triangle(5, 5, 5)
];

shapes.forEach(shape => {
  console.log(shape.displayInfo());
  console.log('площадь: ${shape.calculateArea().toFixed(2)}');
  console.log('периметр: ${shape.calculatePerimeter().toFixed(2)}');
  console.log('-------------------');
});

3.
class ExtendedArray extends Array {
  getString(separator = ', ') {
    return this.join(separator);
  }

  getHtml(tagName = 'div') {
    const items = this.map(item => `<${tagName}>${item}</${tagName}>`).join('\n');

    if (tagName.toLowerCase() === 'li') {
      return `<ul>\n${items}\n</ul>`;
    }

    return items;
  }
}

const myArray = new ExtendedArray(
  'первый элемент',
  'второй элемент',
  'третий элемент',
  'четвертый элемент'
);

console.log('результат getString():');
console.log(myArray.getString(' - '));

console.log('\nрезультат getHtml("div"):');
console.log(myArray.getHtml('div'));

console.log('\nрезультат getHtml("li"):');
console.log(myArray.getHtml('li'));

console.log('\nрезультат getHtml("p"):');
console.log(myArray.getHtml('p'));