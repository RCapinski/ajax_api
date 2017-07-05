var url = 'http://api.icndb.com/jokes/random';
var button = document.getElementById('get-joke');
var paragraph = document.getElementById('joke');

button.addEventListener('click', function() {
    getJoke();
});

function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function() {
    var response = JSON.parse(xhr.response);
    if (!response || !response.value || !response.value.joke) {
      alert('Joke could not be loaded!');
      return null;
    };
    paragraph.innerHTML = response.value.joke;
  });
  xhr.send();
};

document.onload = getJoke();
