import _ from 'lodash';
import Cleave from 'cleave.js';
require('cleave.js/dist/addons/cleave-phone.be'); 

var name = new Cleave('#name',{
    prefix: 'STUDENT - ',
    uppercase: true
});

var date = new Cleave('#DOB',{
    date: true,
    delimiter: '-',
    datePattern: ['d','m','Y']
});

var rijksregister = new Cleave('#RRN',{
    blocks: [2, 2, 2, 3, 2],
    delimiters: ['.','.','-','.'],
});

var leeftijd = new Cleave('#leeftijd',{
    numeral: true,
    numeralPositiveOnly: true
});

var tel = new Cleave('#tel',{
    phone: true,
    phoneRegionCode: 'BE'
});

document.getElementById('sexyform').addEventListener('submit',function(event){
    event.preventDefault;
    const name = document.getElementById('name').value;
    const date = document.getElementById('DOB').value;
    const rijksregister = document.getElementById('RRN').value;
    const leeftijd = document.getElementById('leeftijd').value;
    const tel = document.getElementById('tel').value;

    document.getElementById('title').innerText = `My name is ${name}, and I'm ${leeftijd} years old.`;
    document.getElementById('intro').innerText = `Born on ${DOB}, this person was granted a unique number. That way the government could track every move. That number was ${rijksregister}`;
    document.getElementById('callme').innerText = `Call me: ${tel}`;
})