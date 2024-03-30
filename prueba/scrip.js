document.addEventListener('DOMContentLoaded', function() {
    var guessButton = document.getElementById('guessButton');
  
    guessButton.addEventListener('click', function() {
      var guessInput = document.getElementById('guessInput');
      var guess = parseInt(guessInput.value);
  
      if (guess === 8) {
        document.getElementById('message').innerHTML = '¡Felicidades! ¡Has encontrado el número!';
      } else {
        document.getElementById('message').innerHTML = 'Intenta de nuevo. El número era 8.';
      }
    });
  });  