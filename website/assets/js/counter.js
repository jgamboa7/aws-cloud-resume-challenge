//  JavaScript Code for the Counter
const Counter = document.querySelector(".counter-number");
async function updatecounter(){
    let response = await fetch ("https://gktcr4rlgtf7hmakhwxnliqdvu0kyxdu.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    Counter.innerHTML = `  ${data}`;
}

updatecounter();