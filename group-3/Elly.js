window.onload = function(){
  var body = document.body;
  var purpleButton = document.getElementById("purple");
  var tealButton = document.getElementById("teal");
  var lavenderButton = document.getElementById("lavender")

purpleButton.onclick = function(){
  body.style.backgroundColor ='purple';
}
tealButton.onclick = function(){
  body.style.backgroundColor = 'teal'
}
lavenderButton.onclick = function(){
  body.style.backgroundColor = 'lavender'
}
}
