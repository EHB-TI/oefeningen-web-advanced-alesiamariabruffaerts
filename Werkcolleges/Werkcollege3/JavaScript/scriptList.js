'use strict';

let list = JSON.parse(localStorage.getItem('list')); 
console.log(list);

let classes = ["list-group-item-primary", "list-group-item-secondary", "list-group-item-success","list-group-item-danger","list-group-item-warning","list-group-item-info","list-group-item-ligh","list-group-item-dark"];

let html = `<div class="list-group">`;
    for(let student of list){
        let style = Math.floor(Math.random()*7);
        html+= `<a href="#extra" class="list-group-item {classes[style]}">${student.name}</a>`
        document.querySelector('.list-group-item').addEventListener('click',addInfo(student));
    }
html+= '</div>';

document.getElementById('list').innerHTML = html;

function addInfo(student){
    let html = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${student.name}</h5>
      <p class="card-text">${student.age}</p>
      <p class="card-text">${student.degree}</p>
      <p class="card-text">${student.courses.join(', ')}</p>
    </div>
  </div>`

  document.getElementById('extra').innerHTML = html;
}