 var buttonElement= document.getElementById("btn");

 var jokeElement =document.getElementById("joke");

 var apiKey = 'hbbowZI2kjB9bcPkQi/lJA==lYFWSO21NcNCRX3H';
  var apiUrl ="https://api.api-ninjas.com/v1/dadjokes?limit=1"
 var options = {
    method: "GET",
    headers:{
        "X-Api-Key": apiKey,
    },
 };
 buttonElement.addEventListener("click", async function () {

    try {
        jokeElement.innerText = "updating...";
    buttonElement.disabled = true;
    buttonElement.innerText = "loading...";
    var response = await fetch( apiUrl, options);
    var data = await response.json();
    var theJoke = data[0].joke
    buttonElement.disabled = false;
    buttonElement.innerText = "Tell me a joke";

   jokeElement.innerText = theJoke
        
    } catch (error) {
        jokeElement.innerhtml = "<em>An error occured, please try again later.</em>";
        buttonElement.disabled = false;
        buttonElement.innerText = "Tell me a joke";

    }

    
 })
