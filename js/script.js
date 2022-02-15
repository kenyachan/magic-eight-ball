document.addEventListener('keyup', (event) => {
    if(event.code === "Space") {
        document.getElementById("shakeButton").click();
    }
});

const fortuneText = document.getElementById("fortuneText");

// add event listeners to elements for controlling the jitters
fortuneText.addEventListener("animationend", toggleFortuneTextShake);

// load eightball
const req = new Request("../eightball.json");
let eightball;

async function getEightBall() {
    eightball = await (await fetch(req)).json();

    // add shake function to the eightball object
    eightball.shake = function() {
        let randomNumber = new MersenneTwister().random();
        randomNumber = Math.floor(randomNumber * 8);

        fortuneText.innerHTML = eightball.fortunes[randomNumber];
    };
}

function toggleFortuneTextShake() {
    fortuneText.classList.toggle("shake");
}

function shakeEightBall() {
    toggleFortuneTextShake();
    eightball.shake();
}
