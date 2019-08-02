window.onload = function(){
  var body = document.body;


  var lavenderButton = document.getElementById("lavender");
  var tealButton = document.getElementById("teal")
  var indigoButton = document.getElementById("indigo")
  var orangeButton = document.getElementById("orange")

  lavenderButton.onclick = function(){
    body.style.backgroundColor = 'lavender';
  }
  tealButton.onclick = function(){
    body.style.backgroundColor ='teal';
  }
  indigoButton.onclick = function(){
    body.style.backgroundColor ='indigo';
  }
  orangeButton.onclick = function(){
    body.style.backgroundColor = 'orange';
  }
}
