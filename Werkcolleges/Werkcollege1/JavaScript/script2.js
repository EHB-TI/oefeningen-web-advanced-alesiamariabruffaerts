//Oefening 4
"use script";

window.onload = () => {
    /*
    console.log("loaded");
    document.getElementById("verifyForm").addEventListener("submit", verifyForm);

    function verifyForm(event){
        event.preventDefault();
        //Get the values 
        const fname = document.getElementById("inputFirstname").value; 
        const age = document.getElementById("inputAge").value;
        
        //Create new content
        const sentence = `<p>${fname} is ${age} years old!</p>`;
        const sentence1 = `<p>${fname}, you're too young!</p>`;

        //Add to the DOM
        if(age>18){
            document.getElementById("message").innerHTML = sentence;
        }
        else{
            document.getElementById("message").innerHTML = sentence1;
        }
    } */

    //Oefening 7
    function Capitalize(word){
        console.log(word.slice(0,1).toUpperCase() + word.substrate(1));
    }

    let naam = "alesia";
    let achternaam = bruffaerts;

    /* oefening 8 probeersel
    
    let text = "alesia bruffaerts";
    let char = text.charAt(0);
    let char1 = char.toUpperCase();
    let text1 = text.slice(1);
    let text2 = char1.concat(text1);
    console.log(text2);*/

    /* Oefening 9
    
    let sentence = 'Javascript is the main focus of Web Essentials';
    let sentence1 = sentence.replace("Essentials","Advanced");
    console.log(sentence1);

    Oefening 10

    function zoekLangste(landen[]){
        for(let i=0;i<landen.length;i++){
            let langsteLengte = 0;
            let langste;
            if(landen[i].length > langsteLengte){
                langsteLengte = landen[i].length;
                langste = landen[i];
            }
            return langste;
        }

    let landen = ["Belgie","Duitsland","Frankrijk"];
    zoekLangste(landen);
    }*/

    /*
    
    Oefening 12
    const d = getDate();
    const m = getMonth();
    const y = getFullYear();

    console.log(d + " " + m + " " + y);*/

}
