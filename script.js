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
var options = document.querySelectorAll(".option");
var image=document.querySelector(".img");

countdown.addEventListener("change", function () {
  var countdownval = this.value;
  // console.log(countdownval);
  switch (countdownval) {
    case 0:
      // day = "Sunday";
      break;
    case 1:
      // day = "Monday";
      break;
    case 2:
      // day = "Tuesday";
      break;
    case 3:
      // day = "Wednesday";
      break;
    case 4:
      // day = "Thursday";
      break;
    case 5:
      // day = "Friday";
      break;
    case 6:
      // day = "Saturday";
      break;
      case 7:
      // day = "Saturday";
      break;
      case 8:
      // day = "Saturday";
      break;
      case 9:
      // day = "Saturday";
      break;
      case 10:
      // day = "Saturday";
      break;
      case 11:
      console.log("11");
      image.src="https://cdn.glitch.global/693438a2-770f-48f5-8219-74763b09679b/ae-count-03.png?v=1649993902587"
      break;
  }
});

// options.forEach(function(option) {

//   option.addEventListener('change', function() {
//     // var postId = this.getAttribute('post-id')
//   console.log("click")
//     // document.getElementById('comment-form-' + postId).style.display = 'block'
//   })
// })

// console.log(options);
// options.forEach(function(option) {
//   option.addEventListener('click', function() {
//     console.log("click")
//     var countdownval = this.value;
//   console.log(countdownval)
//     // document.getElementById('comment-form-' + postId).style.display = 'block'
//   })
// })
