/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// console.log("Hello, world!");

let srclist = [
  "countdownVD/newyear.mp4",
  "countdownVD/cooker_3.mp4",
  "countdownVD/oldfilm.mp4",
  "countdownVD/youtube.mp4",
  "countdownVD/path.mp4",
  "countdownVD/walk_2.mp4",
  "countdownVD/space.mp4",
  "8",
  "9",
  "countdownVD/bomb.mp4",
];
let randomX;
let randomY;

$(".num").click(function (e) {
  randomX = Math.floor(Math.random() * $(window).width() + 1);
  randomY = Math.floor(Math.random() * $(window).height() + 1);
  e.preventDefault();
  let index = $(this).children("a").attr("id");
  // console.log(srclist[index]);
  $(".esc").css({ top: randomY + "px", left: randomX + "px" });
  console.log(randomX, randomY);
  // $(".esc").fadeIn(2000);
  $(".vd").attr("src", srclist[index]);
  $(".backgroundVD").fadeIn();
  $("video").on("ended", function () {
    $(".backgroundVD").fadeOut();
    // $(".esc").hide();
  });
  $(".esc").click(function (event) {
    event.preventDefault();
    $(".backgroundVD").fadeOut();
    // $(".esc").hide();
  });
  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      // escape key maps to keycode `27`
      e.preventDefault();
      $(".backgroundVD").fadeOut();
      // $(".esc").hide();
    }
  });
});

$(document).click(function () {
  // e.preventDefault();
  $(".audio")[0].play();
  console.log("click");
});
