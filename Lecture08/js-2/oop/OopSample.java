class Person {
	String name;
	int age;
	public Person(String name, int age) {
		this.name = name;
		if (age < 0) {
			this.age = this.getDefaultAge();
		} else {
			this.age = age;
		}
	}
	public int getDefaultAge() { return 18; }
}


class Student extends Person {
	int grade;
	Student s = this;
	public Student(String name, int age, int grade) {
		super(name, age);
		this.grade = grade;
	}
	public int getDefaultAge() { return 13; }
}

Student s = new Student("John", -10, 5);
