window.onload = function() {
    var user = 'x1340107752';
    var domain = 'gmail.com';
    document.getElementById('email').innerText = user + '@' + domain;
}

function saveToLocalStorage() {
    var myInput = document.getElementById('myInput').value;
    localStorage.setItem('userInput', myInput);
  }