//Oefening 7
//oefening 4 
'use strict';
window.onload = function(){
    document.getElementById('btn').addEventListener('click', createStudent);
    document.getElementById('btn2').addEventListener('click', showStudents);

    let listStudents = [];

    function Student(name, age, degree){
        this.name = name;
        this.age = age;
        this.degree = degree; 
        this.courses = [];
        this.setPersonalDetails = function(details){
            [this.name,this.age,this.degree]=details;
        };
        this.addCourse = function(course){
            this.courses.push(course);
        };
        this.showStudent = function(){
            let txt = `Mijn naam is ${this.name}. Ik ben ${this.age} jaar oud en volg ${this.degree} aan EhB.
                Mijn vakken zijn: ${this.courses.join(', ')}.`;
            return txt;
        }
    }

    function createStudent(){
        let name = prompt('Name:');
        let age = prompt('Age:');
        let degree = prompt('Degree');

        let student = new Student(name, age, degree);

        while(true){
            let c = prompt("Course:");
            if(c){
                student.addCourse(c);
            }
            else{
                break;
            }
        } 

        listStudents.push(student);
    }

    function showStudents(){
        let div = document.getElementById('content');
        for(let s of listStudents){
            let p = document.createElement('p');
            p.innerHTML = s.showStudent();
            div.appendChild(p);
        }
    }  
};
