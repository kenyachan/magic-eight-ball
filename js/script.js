document.addEventListener('keyup', (event) => {
    if(event.code === "Space") {
        document.getElementById("shakeButton").click();
    }
});

const fortuneText = document.getElementById("fortuneText");

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

function shakeEightBall() {
    eightball.shake();

    // Toggles the shake animation
    fortuneText.classList.remove("shake");
    window.requestAnimationFrame(function() {
        fortuneText.classList.add("shake");
    });
}
