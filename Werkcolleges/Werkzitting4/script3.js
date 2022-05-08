//eigen oef
//probleem met fetchresults??? 

'use strict';
let config = null;
let counter =0;
let data;
let results;

async function getConfig(){
    let resp = await fetch('dummy.json');
    //we convert the response into a json file 
    data = await resp.json();
    //config will have two properties (key and url )
    config = data;
}
 
window.onload = () =>{
    console.log('loaded');
    //dummy.json bewaart url en key
    getConfig();
    //Key up = wanneer toets gelost wordt, gebeurt er iets 
    document.getElementById('inputTitle').addEventListener('keyup',fetchResults);
    
    //array.from = create a new array from an array-like object
    //forEach executes a provided function for each element
    Array.from(document.getElementsByClassName('list-group-item')).forEach(function(element){
        element.addEventListener('click',fetchFilm);
    });

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
        console.log(movie);
        }

    //kijktijd counter
    document.getElementById('addMovie').addEventListener('click',addWatchTime);

    function addWatchTime(event){
            console.log((data));
            let time = data.Runtime;
            time.substring(0, time.indexOf(" "));
            counter += parseInt(time);
            document.getElementById('counter').innerHTML = counter;
            localStorage.setItem('moviecounter', counter);
    }

    if(localStorage.getItem('moviecounter')){
        counter = parseInt('moviecounter',counter);
    }

    document.getElementById('counter').innerHTML = counter;
    document.getElementById('resultList').style.display = 'none';

    async function fetchFilm(event){
        //target event returns the element that triggered the event
        //hij neemt iets van de API site, check documentatie. we maken de url naar data
        //s of t = soort search (kijk in docu)
        let url = `${config.baseurl}t=${searchParameter}${config.apikey}`;
        let resp = await fetch(url);
        results = await resp.json();
        //search komt van de data-array die je krijgt wanneer je parameter console.logged
        showMovieOnCard(results);
    }

    let fetchResults = async (event) => {
        let resp = await fetch(`${config.baseurl}s=${event.target.value}${config.apikey}`);
        results = await resp.json();
        let count = 1; 
        if(results){
            //error object 
            if(results.Error){
                document.getElementById('message').innerText = 'Keep trying...';
                //search method matches a string agains regular expression. returns the index of first match in array
                for(let r of results.Search){
                    document.getElementById('message').innerText=' ';
                    if(count == 6){
                        break;
                    }
                    document.getElementById(`result${count}`).innerText = `${r.Title} / Year: ${r.Year}`;
                    count++;
                }
            }
        }
    }

    document.getElementById('moviecard').style.display = "none";
    //use one function to get data from API, one to submit and one to handle dom manipulation
    //like this, if you change e.g. the API, everything will still work

}

