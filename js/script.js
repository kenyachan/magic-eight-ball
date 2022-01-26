function getResponse() {
    // Eight Ball response array
    const responses = ['It is certain', 'It is decidedly so',
     'Reply hazy, try again', 'Cannot predict now', 
     'Do not count on it', 'My sources say no', 
     'Outlook not so good', 'Signs point to yes']

    // Random number from 0-7 corresponding to response array positions
    let randomNumber = Math.floor(Math.random() * 8);
    // The response that will be displayed
    let eightBallResponse = responses[randomNumber];

    document.getElementById("response").innerHTML = eightBallResponse;
}

