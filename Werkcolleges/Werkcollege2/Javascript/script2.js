//oefening 4 
'use strict';

let student = {
    name: "Default name", 
    age: 0, 
    degree: "Default degree", 
    courses: [], 
    setPersonalDetails: function(name, age, degree){
        this.name = name;
        this.age = age;
        this.degree = degree;
    }, 
    addCourse: function(courses){
        if(courses){
            this.courses.push(courses);
        }
    }, 
    showStudent: function(){
        let txt = `Mijn naam is ${this.name}. Ik ben ${this.age} jaar oud en volg ${this.degree} aan EhB.
            Mijn vakken zijn: ${this.courses.join(', ')}.`;
        console.log(txt);
    }
}

let n = prompt("Name:");
let a = prompt("Age");
let d = prompt("Degree:");

while(true){
    let c = prompt("Course:");
    if(c){
        student.addCourse(c);
    }
    else{
        break;
    }
}

student.setPersonalDetails(n, a, d);
student.showStudent();

console.log("hallo");