class Person {
	char name[];
	int age;
public:
	Person(char[] name, int age) {
		this->name = name;
		if (age < 0) this->age = this->getDefaultAge();
		else this->age = age;
	}
	int getDefaultAge() { return 18; }
}

class Student : public Person {
	int grade;
public:
	Student(
		char[] name,
		int age,
		int grade
		): Person(name, age) {
		this->grade = grade;
	}
	int getDefaultAge() { return 13; }
};

int main () {
  Student* s = new Student("John", -10, 5);
  return 0;
}
