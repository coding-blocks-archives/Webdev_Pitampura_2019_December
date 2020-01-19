#include <iostream>
using namespace std;
class Person {
	string name;
public:
	int age;
	Person(string name, int age) {
		this->name = name;
		if (age < 0) this->age = this->getDefaultAge();
		else this->age = age;
	}
	int getDefaultAge() { return 18; }
};

class Student : public Person {
	int grade;
public:
	Student(
		string name,
		int age,
		int grade
		): Person(name, age) {
		this->grade = grade;
	}
  int getAge() { return age; }
	int getDefaultAge() { return 13; }
};

int main () {
  Student* s = new Student("John", -10, 5);
  cout<<s->getAge();
  return 0;
}
