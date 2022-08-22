const button = document.querySelector("#shakeButton");
const fortuneText = document.querySelector("#fortuneText");

window.addEventListener('load', getEightBall);
button.addEventListener('click', shake);
document.addEventListener('keydown', event => {
    if(event.code === "Space") shake();
});

const req = new Request("../eightball.json");
let eightball;

async function getEightBall() {
    eightball = await (await fetch(req)).json();
}

function shake() {
    getFortune();
    shakeEightBall();
}

function getFortune() {
    let randomNumber = new MersenneTwister().random();
    randomNumber = Math.floor(randomNumber * 8);

    fortuneText.textContent = eightball.fortunes[randomNumber];
}

function shakeEightBall() {
    fortuneText.classList.remove("shake");
    window.requestAnimationFrame(() => {
        fortuneText.classList.add("shake");
    });
}

