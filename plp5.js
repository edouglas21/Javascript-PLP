// making a person class
class Person {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }

    greet() {
        return `Hellooo, my name is ${this.name}, I am ${this.age} yrs old, and I work as a ${this.job}.`;
    }
    haveBirthday() {
        this.age += 1;
        return `Happy birthday! You are now ${this.age} yrs old.`;
    }
    changeJob(newJob) {
        this.job = newJob;
        return `${this.name}  switched jobs to ${this.job}.`;
    }
}

// student subclass that inherits from the person class
class Student extends Person {
    constructor(name, age, major, year) {
        super(name, age, 'Student');  // takes in from the person class
        this.major = major;
        this.year = year;
    }

    study() {
        return `${this.name} is studying ${this.major}.`;
    }

    nextYear() {
        this.year += 1;
        return `${this.name} is now ${this.year}.`;
    }
}

// instances and using the methods
const person1 = new Person('Emily', 21, 'Baker');
console.log(person1.greet());
console.log(person1.haveBirthday());
console.log(person1.changeJob('Doctor'));

const student1 = new Student('Emerson', 20, 'Computer Science', 2);
console.log(student1.greet());   // inherit from Person class
console.log(student1.study());      // specific to Student
console.log(student1.nextYear());    // specific to Student
