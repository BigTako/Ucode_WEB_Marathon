const transformButton = document.getElementById("btn");
const lab = document.getElementById("lab");
const heroName = document.getElementById("hero");

let counter = 0;

function transformation(){
    if (counter % 2 == 0) // transform into HULK
    {
        lab.style.backgroundColor = "#70964b";
        heroName.style.letterSpacing = "6px";
        heroName.style.fontSize = "130px";
        heroName.textContent = "HULK";
    }else{ // transfrom back to Bruce banner
        lab.style.backgroundColor = "#ffb300";
        heroName.style.letterSpacing = "2px";
        heroName.style.fontSize = "60px";
        heroName.textContent = "Bruce Banner";
    }
    counter++;
}
