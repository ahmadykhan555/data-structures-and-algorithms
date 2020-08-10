class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  /**
   * Instance methods: Methods that are bound to each instance.
   */
  fullName() {
    return `Full name is ${this.firstName} ${this.lastName}`;
  }
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Static Methods:
   * Methods that are available at class level and do not require an instance
   * any instance of this class wont be able to access it
   * used mostly for utility function like the one below
   * access it using ClassName.Method
   * eg: Point.distance(a, b)
   */
  static distance(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;

    return Math.floor(Math.hypot(dx, dy));
  }
}

(() => {
  const stdOne = new Student("Ahmad", "Yar Khan");
  const fullName = stdOne.fullName();

  const pt1 = new Point(10, 5);
  const pt2 = new Point(12, 13);
  const distance = Point.distance(pt1, pt2);

  console.log(fullName, distance);
})();
