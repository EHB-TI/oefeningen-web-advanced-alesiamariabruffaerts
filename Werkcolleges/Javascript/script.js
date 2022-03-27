"use strict";

let color = {
    nR: "rood", 
    nG: "groen", 
    nB: "blauw",
    setColor: function(r,g,b){


        if(r>=0&&r<=255 && g>=0&&g<=255 && b>=0&&b<=255){
            color.nR = r;
            color.nG = g;
            color.nB = b;
            console.log("Succes");
        }
        else{
            console.log("Error");   
        }
    }, 
    showColor: function(){
        console.log("rgb(" + color.nR + ", " + color.nG + ", " + color.nB + ")");
    }
}
let r = prompt("Red value:");
let g = prompt("Green value:");
let b = prompt("Green value");

color.setColor(r,g,b);
color.showColor();