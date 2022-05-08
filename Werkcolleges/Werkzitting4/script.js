//code along

'use strict';
let config = null;

async function getConfig(){
    let resp = await fetch('dummy.json');
    //we convert the response into a json file 
    let data = await resp.json();
    //config will have two properties (key and url )
    config = data;
}
 
window.onload = () =>{
    console.log('loaded');
    //dummy.json bewaart url en key
    getConfig();

    async function getData(searchParameter){
        //hij neemt iets van de API site, check documentatie. we maken de url naar data
        //s of t = soort search (kijk in docu)
        let url = `${config.baseurl}t=${searchParameter}${config.apikey}`;
        let resp = await fetch(url);
        let data = await resp.json();
        //search komt van de data-array die je krijgt wanneer je parameter console.logged
        return data;
    }

    function showMovieOnCard(movie){
        //dom manipulation 
        //Title, Plot, Released zijn properties uit API zelf.
        //If you console.log movie, you can see the properties 
        document.getElementById('movie-title').innerText = movie.Title;
        document.getElementById('movie-plot').innerText = movie.Plot;
        document.getElementById('movie-releasedate').innerText = movie.Released;
        document.getElementById('movie-poster').setAttribute('src', movie.Poster);
        //show card
        document.getElementById('moviecard').style.display = "block";
         

    }

    let submitForm = event => {
        event.preventDefault();
        let value = document.getElementById('inputTitle').value;
        console.log(value);
        //search for movie
        //because it's an asynchronous function, u have to wait for the results before doing anything else
        getData(value).then(result => {
            //add data to dom 
            showMovieOnCard(result);
        });
    }

    document.getElementById('searchform').addEventListener('submit',submitForm);
    document.getElementById('moviecard').style.display = "none";
    //use one function to get data from API, one to submit and one to handle dom manipulation
    //like this, if you change e.g. the API, everything will still work
}

