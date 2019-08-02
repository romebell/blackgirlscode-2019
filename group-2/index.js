window.onload = function(){
  var body = document.body;
  var cakeButton = document.getElementById("cake");
  var lolipopButton = document.getElementById("lolipop");
  var queenButton = document.getElementById("queen");



  cakeButton.onclick = function(){
    body.style.backgroundImage = "url('cake.jpeg')";
  }

  lolipopButton.onclick = function(){
    body.style.backgroundImage = "url('lolipop.jpeg')";
  }


  queenButton.onclick = function(){
      body.style.backgroundImage = "url('queen.jpeg')";
      body.style.color = 'pink';
    }
}
