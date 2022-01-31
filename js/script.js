
const shakeButton = document.getElementById("shakeButton");
const fortuneText = document.getElementById("fortuneText");

// add event listeners to elements for controlling the jitters
shakeButton.addEventListener("click", toggleFortuneTextShake);
fortuneText.addEventListener("animationend", toggleFortuneTextShake);

function toggleFortuneTextShake() {
    document.getElementById("fortuneText").classList.toggle("shake");
}

async function getFortune() {
    // Get eightball fortune array
    const requestURL = "../eight_ball_fortunes.json";
    const request = new Request(requestURL);
    const fortuneData = await fetch(request);
    const fortunes = await fortuneData.json();

    // Random number from 0-7 corresponding to fortune array positions
    let randomNumber = Math.floor(Math.random() * 8);
    // The fortune that will be displayed
    let eightBallFortune = fortunes[randomNumber];

    fortuneText.innerHTML = eightBallFortune;
}
