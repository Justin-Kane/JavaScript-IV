// CODE here for your Lambda Classes

// BASE CLASS

class Person {
    constructor(personAtt){
        this.name = personAtt.name;
        this.age = personAtt.age;
        this.location = personAtt.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

// INSTRUCTORS

class Instructor extends Person {
    constructor(instructorAtt){
        super(instructorAtt);
        this.specialty = instructorAtt.specialty;
        this.favLanguage = instructorAtt.favLanguage;
        this.catchPhrase = instructorAtt.catchPhrase;
    }
    demo(subject) {
        return (`Today we are learning about ${subject}`)
    }
    grade(student, subject) {
        return (`${student.name} receives a perfect score on ${subject}`)
    }
}

// STUDENTS

class Student extends Person {
    constructor(studentAtt){
        super(studentAtt);
        this.previousBackground = studentAtt.previousBackground;
        this.className = studentAtt.className;
        this.favSubjects = studentAtt.favSubjects;
    }
    listSubjects() {
        for ( let i = 0; i < this.favSubjects.length; i++)
        return (this.favSubjects);
    }
    prAssignment(subject) {
        return (`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject) {
        return (`${this.name} has begun sprint challenge on ${subject}`)
    }
}

// PROJECT MANAGERS

class ProjectManager extends Instructor {
    constructor(pmAtt){
        super(pmAtt);
        this.gradClasssName = pmAtt.gradClasssName;
        this.favInstructor = pmAtt.favInstructor;
    }
    standup(subject) {
        return(`Today we are learning about ${subject}`)
    }
    debugsCode(student, subject) {
        return(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

// Instructors **************************************************************
const rick = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'and thats the way the news goes'
});

const arnold = new Instructor({
    name: 'Arnold',
    location: 'New York',
    age: 32,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: 'ill be back'
});

// Students **************************************************************
const sam = new Student({
    name: 'Sam',
    location: 'Florida',
    age: 27,
    previousBackground: 'retail', 
    className: 'CS101',
    favSubjects: "HTML/CSS",
});

const fred = new Student({
    name: 'Fred',
    location: 'California',
    age: 37,
    previousBackground: 'mechanical-engineering', 
    className: 'CS200',
    favSubjects: "Java",
});


// Project Managers **************************************************************
const john = new ProjectManager({
    name: 'Jennifer',
    location: 'Virginia',
    age: 26,
    gradClasssName: 'WEB23',
    favInstructor: 'rick',
});

const james = new ProjectManager({
    name: 'Jim',
    location: 'Texas',
    age: 32,
    gradClasssName: 'WEB13',
    favInstructor: 'arnold',
});

// LOG **************************************************************

//Instructors
console.log(rick.speak());
console.log(arnold.demo('CSS'));
console.log(rick.grade(sam, 'REACT'));
//Students
console.log(sam.speak());
console.log(fred.listSubjects());
console.log(sam.prAssignment('Javascript'));
console.log(fred.sprintChallenge('Node'));
//Project Managers
console.log(john.speak());
console.log(james.demo('Java'));
console.log(john.grade(fred, 'HTML'));
console.log(james.standup('Computer Science'));
console.log(john.debugsCode(sam, 'machine learning'));