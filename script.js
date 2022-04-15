/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello, world!");


// Set the date we're counting down to
var timeleft = 99;

var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("number").innerHTML = "Finished";
  } else {
    document.getElementById("number").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);