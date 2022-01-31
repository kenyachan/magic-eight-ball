async function getResponse() {
    // Get eightball responses array
    const requestURL = "../eight_ball_responses.json";
    const request = new Request(requestURL);
    const responseData = await fetch(request);
    const responses = await responseData.json();

    // Random number from 0-7 corresponding to response array positions
    let randomNumber = Math.floor(Math.random() * 8);
    // The response that will be displayed
    let eightBallResponse = responses[randomNumber];

    document.getElementById("response").innerHTML = eightBallResponse;
}

