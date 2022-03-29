'use strict';
window.onload = function(){
    let register = document.getElementById("register");
    register.addEventListener("click", createStudent);  
    

    let listStudents = [];

    function Student(name, age, degree){
        this.name = name;
        this.age = age;
        this.degree = degree; 
        this.courses = [];
        this.setPersonalDetails = function(details){
            [this.name,this.age,this.degree]=details;
        };
        this.addCourses = function(course){
            this.courses.push(course);
        };

        this.addCourse = function(course){
            this.courses.push(course);
        }
        this.showStudent = function(){
            let txt = `Mijn naam is ${this.name}. Ik ben ${this.age} jaar oud en volg ${this.degree} aan EhB.
                Mijn vakken zijn: ${this.courses.join(', ')}.`;
            return txt;
        }
    }

    function createStudent(){
        let name = document.getElementById('name').value;
        let age = document.getElementById('age').value;
        let degree = document.querySelector('input[type=radio]:checked').value;
        let courses = document.querySelectorAll('input[type=checkbox]:checked');

        //Do some checks
        //Toon alert
       
        if(name == "" || age == ""){
            addAlert(false, "Student object wasn't created succesfully");
        } 
        else{
            addAlert(true, "Student object created succesfully"); 
            let student = new Student(name, age, degree);
            for(let c of courses){
                student.addCourse(c.value);
            }
        //object created, save it to list      
        listStudents.push(student);

        //Persist list using local storage
        //https:developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
        localStorage.setItem('list', JSON.stringify(listStudents));     

        console.log(listStudents);
        
        //Empty inputfields 
        document.getElementById('name').value = ""; 
        document.getElementById('name').age = ""; 
        }
    }
    function addAlert(status,message){
         let content = " ";

         if(status){ //true = success
            content = `<div class="alert alert-success" role="alert">
                ${message}
          </div>`;
         }
         else{
            content = `<div class="alert alert-danger" role="alert">
            ${message}
          </div>`;
         }
         //add message to top of page 
         document.getElementById('messages').innerHTML = content;
    }
}

