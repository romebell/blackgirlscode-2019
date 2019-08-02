window.onload = function(){
  var body = document.body;
  var magentaButton = document.getElementById("magenta");
  var purpleButton = document.getElementById("purple");
  var turquoiseButton = document.getElementById("turquoise");


magentaButton.onclick = function(){
  body.style.backgroundColor = 'magenta';
}

purpleButton.onclick = function(){
  body.style.backgroundColor = 'purple';
}

turquoiseButton.onclick = function(){
  body.style.backgroundColor = 'turquoise';
}
}
