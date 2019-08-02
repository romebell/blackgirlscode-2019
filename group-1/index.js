window.onload = function(){
  var body = document.body;
  var purpleButton = document.getElementById("purple");
  var yellowButton = document.getElementById("yellow");
  var redButton = document.getElementById("red");
  var blueButton = document.getElementById("blue")
  var greenButton = document.getElementById("green")
  var orangeButton = document.getElementById("orange")
  var pinkButton = document.getElementById("pink")

purpleButton.onclick = function(){
  body.style.backgroundColor = "purple";
}

blueButton.onclick = function(){
  body.style.backgroundColor = "blue";
}

greenButton.onclick = function(){
  body.style.backgroundColor = "green";
}

yellowButton.onclick = function(){
  body.style.backgroundColor = "yellow";
}

orangeButton.onclick = function(){
  body.style.backgroundColor = "orange";
}

pinkButton.onclick = function(){
  body.style.backgroundColor = "pink";
}
}
