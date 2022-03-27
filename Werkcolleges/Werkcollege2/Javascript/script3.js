//oefening 4 
'use strict';

let student = {
    name: "Default name", 
    age: 0, 
    degree: "Default degree", 
    courses: [], 
    setPersonalDetails(details){
        [this.name,this.age,this.degree]=details;
    }, 
    addCourse(...courses){
        this.courses = [...this.courses, ...courses];
    }, 
    showStudent(){
        let txt = `Mijn naam is ${this.name}. Ik ben ${this.age} jaar oud en volg ${this.degree} aan EhB.
            Mijn vakken zijn: ${this.courses.join(', ')}.`;
        console.log(txt);
    }
}

let data = [];
data.push(prompt("Name:"));
data.push(prompt("Age:"));
data.push(prompt("Degree:"));
student.setPersonalDetails(data);

while(true){
    let c = prompt("Course:");
    if(c){
        student.addCourse(c);
    }
    else{
        break;
    }
}

student.showStudent();
