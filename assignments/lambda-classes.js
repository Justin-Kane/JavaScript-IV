// CODE here for your Lambda Classes
class Person {
    constructor(personAtt){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(instructorAtt){
        super(instructorAtt);
        this.specialty
    }
}