//Oefening 4
"use script";

window.onload = () => {
    
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
    } 

    //Oefening 7
    function capitalize(word){
        console.log(word.slice(0,1).toUpperCase() + word.substr(1));
    }

    let naam = "alesia";
    let achternaam = "bruffaerts";

    capitalize(naam);
    capitalize(achternaam);


    //Oefening 8
    function capitalize1(word){
        word = word.trim();
        let words = word.split(" ");
        for(let part in words){
            words[part] = words[part].slice(0,1).toUpperCase() + words[part].substr(1);
        }
        console.log(words.join(" "));
    }

    let volleNaam = "alesia bruffaerts   ";
    capitalize1(volleNaam);

    //Oefening 9
    
    let sentence = 'Javascript is the main focus of Web Essentials';
    let sentence1 = sentence.replace("Essentials","Advanced");
    console.log(sentence1);

    //Oefening 10

    function zoekLangste(...landen){
        let langste = "";
        for(let land in landen){
            if(langste.length < landen[land].trim().length){
                langste = landen[land].trim();
            }
        }
        return langste;
    }
    console.log(zoekLangste("Belgie","Duitsland","Frankrijk","verenigdestatenvanamerika"));
    
    
    //Oefening 12
    const d = new Date();
    const maanden = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const maand = maanden[d.getMonth()];

    console.log(d.getDate() + " " + maand + " " + d.getFullYear());

}
