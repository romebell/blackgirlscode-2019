window.onload = function(){
  var body = document.body;
  var pinkButton = document.getElementById("pink");
  var orangeButton = document.getElementById("orange");
  var violetButton = document.getElementById("violet");

pinkButton.onclick = function(){
  body.style.backgroundColor = 'pink';
}

orangeButton.onclick = function(){
  body.style.backgroundColor = 'orange';
}

violetButton.onclick = function(){
  body.style.backgroundColor = 'violet';
}
 }
