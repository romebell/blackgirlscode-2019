window.onload = function(){
  var body = document.body;
  var redButton = document.getElementById("red");
  var purpleButton = document.getElementById("purple");
  var yellowButton = document.getElementById("yellow");
  var greenButton = document.getElementById("green");
  var blueButton = document.getElementById('blue');
  var orangeButton = document.getElementById('orange');
  var pinkButton = document.getElementById('pink');

  redButton.onclick = function(){
    body.style.backgroundColor = 'red';
  }

  purpleButton.onclick = function(){
    body.style.backgroundColor = 'purple';
  }

  pinkButton.onclick = function(){
    body.style.backgroundColor = 'pink';
  }

  blueButton.onclick = function(){
    body.style.backgroundColor = 'blue';
  }
  greenButton.onclick = function(){
    body.style.backgroundColor = 'green';
  }
  orangeButton.onclick = function(){
    body.style.backgroundColor = 'orange';
  }
  yellowButton.onclick = function(){
    body.style.backgroundColor = 'yellow';
  }

}