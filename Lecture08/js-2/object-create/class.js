class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age)
    this.grade = grade
  }
}

let p = new Person('John', 50)
let s = new Student('Simon', 12, 6)
