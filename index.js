import { Configuration, OpenAIApi } from "openai";
var configuration = new Configuration({
	organization: "org-i6te4xyyoOiHC19Gw5u8Vfc6",
	apiKey: "",
});

window.onload = function() {
    var user = 'x1340107752';
    var domain = 'gmail.com';
    document.getElementById('email').innerText = user + '@' + domain;
}

function saveToLocalStorage() {
    var myInput = document.getElementById('myInput').value;
    localStorage.setItem('apikey', myInput);
    // set input as api key
    configuration.apiKey = myInput;
  }

// function retrieveFromLocalStorage() {
//     var storedInput = localStorage.getItem('apikey');
//     document.getElementById('displayData').textContent = storedInput;
// }




var openai = new OpenAIApi(configuration);

// const completion = await openai.createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [
//         {role: "user", content: "Hello world"},
//     ]
// });

// console.log(completion.data.choices[0].message); // Hello, who are you?
