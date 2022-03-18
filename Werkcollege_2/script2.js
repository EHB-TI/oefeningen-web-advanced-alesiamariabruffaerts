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
    addCourse: function(course){
        if(course){
            this.course.push(course);
        }
    }, 
    showStudent: function(){
        let txt = `Mijn naam is ${this.name}. Ik ben ${this.age} jaar oud en volg ${this.degree} aan EhB.
            Mijn vakken zijn: ${this.courses.join(', ')}.`;
        console.log(txt);
    }
}

student.showStudent();

