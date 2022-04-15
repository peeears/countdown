/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello, world!");

// Set the date we're counting down to

function reset() {
  var timeleft = 3;
  var downloadTimer = setInterval(function () {
    if (timeleft == 0) {
      clearInterval(downloadTimer);
      document.getElementById("number").innerHTML = "0";
      document.addEventListener("click", function () {
        reset();
        // console.log("clicked");
      });
    } else {
      document.getElementById("number").innerHTML =
        timeleft + " seconds remaining";
    }
    timeleft -= 1;
  }, 1000);
}

reset();


var countdown = document.getElementById("countdown");

var options=document.getElementsByTagName("option") ;
options.forEach(function(option) 

  option.addEventListener('click', function() {
    var countdownval = this.value;
  console.log(countdownval)
    // document.getElementById('comment-form-' + postId).style.display = 'block'
  })
}))
