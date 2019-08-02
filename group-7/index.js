window.onload = function(){
  var body = document.body;
  var paleblueButton = document.getElementById("paleblue");
  var paleturquoiseButton = document.getElementById("paleturquoise");
  var cornflowerblueButton = document.getElementById("cornflowerblue");


paleblueButton.onclick = function(){
  body.style.backgroundColor = '#737CA1';
}

paleturquoiseButton.onclick = function() {
  body.style.backgroundColor = 'paleturquoise';
}

cornflowerblueButton.onclick = function() {
  body.style.backgroundColor = 'cornflowerblue';
}


}
