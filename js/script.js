
const shakeButton = document.getElementById("shakeButton");
const fortuneText = document.getElementById("fortuneText");

// add event listeners to elements for controlling the jitters
shakeButton.addEventListener("click", toggleFortuneTextShake);
fortuneText.addEventListener("animationend", toggleFortuneTextShake);

function toggleFortuneTextShake() {
    fortuneText.classList.toggle("shake");
}

const request = new Request("../eight_ball_fortunes.json");
let fortunes;

async function getFortunesArray() {
    fortunes = await (await fetch(request)).json();
}

function getFortune() {
    // Random number from 0-7 corresponding to fortune array positions
    let randomNumber = new MersenneTwister().random();
    randomNumber = Math.floor(randomNumber * 8);
    
    // Check if fortune array resource has been fetched
    if (fortunes == undefined) { getFortunesArray(); }
        
    fortuneText.innerHTML = fortunes[randomNumber];
}
