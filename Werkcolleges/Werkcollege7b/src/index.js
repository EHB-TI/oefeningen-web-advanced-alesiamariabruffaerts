const Chart = require('../node_modules/chart.js/dist/chart.js');

// Sommige pakketten moet je rechtstreeks uit hun dist folder halen
// vandaar dit lange pad


//TIP: als voorbereiding op dit examen kan je deze oefening uitbreiden met een leuke feature
// Onderaan zal je zien dat de data wel dynamisch aan de grafiek wordt toegevoegd
// Maar de kleuren, de inhoud en het aantal, staan hardcoded op 6
// Opdracht 1:
// Schrijf een functie die dynamisch, op basis van het aantal bars (uit de json) 
// een random kleur genereert voor elke bar. 
// Opdracht 2:
// Go bigger! Maak 3 json files met verschilllende data, zelfde structuur. 
// Laad ze allemaal in en zorg dat je 3 grafieken kan tonen op de bar chart. Consulteer de docu!

window.onload = function() {

    async function getData(){
        let response = await fetch('../data/data.json');
        return await response.json();
    }

    getData().then(
        result => {
            buildChart(result);
        }, error =>{
            console.log('An error when fetching data' + error);
        }
    )

    function buildChart(data){
        let bardata = [];
        let labels = [];
        data.courses.forEach(element =>{
            bardata.push(element.hype);
            labels.push(element.name);
        });

        const ctx = document.getElementById('hypechart').getContext('2d');
        const myChart = new Chart(ctx,{
        type:'bar',
        data: {
            labels: labels, 
            datasets:[{
                label:'Hyperlevels',
                data: bardata,
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
                ], 
                borderWidth: 1
            }]
        },
        options:{
            scales:{
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    }
    
}


