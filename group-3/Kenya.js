window.onload = function() {
  var body = document.body;
  var pinkButton=document.getElementById("pink");
  var purpleButton=document.getElementById("purple");
  var lightblueButton=document.getElementById("lightblue");

  pinkButton.onclick = function() {
    body.style.backgroundColor = 'pink';
  }

  purpleButton.onclick = function() {
    body.style.backgroundColor = 'purple';
  }

  lightblueButton.onclick = function() {
    body.style.backgroundColor = '#ADD8E6';
  }

}
