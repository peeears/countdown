/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// console.log("Hello, world!");

let srclist=["1","https://cdn.glitch.global/b8f7fe36-fd1a-40e9-8a86-3605c11486bc/cooker.mp4?v=1651206240397","3","4","https://cdn.glitch.global/b8f7fe36-fd1a-40e9-8a86-3605c11486bc/path.mp4?v=1651201989036","https://cdn.glitch.global/b8f7fe36-fd1a-40e9-8a86-3605c11486bc/walk.mp4?v=1651201989092","7","8","9","10"]
let randomX;
let randomY;


$( ".num" ).click(function(e) {
  randomX=Math.floor((Math.random() * $(window).width()) + 1);
  randomY=Math.floor((Math.random() * $(window).height()) + 1);
  e.preventDefault();
  let index=$(this).children("a").attr("id");
   // console.log(srclist[index]);
  $(".esc").css({ top: randomY+"px" ,left:randomX+"px"});
  console.log(randomX,randomY);
  $(".esc").fadeIn(2000);
  $(".vd").attr('src', srclist[index]);
  $(".backgroundVD").fadeIn();
  $('video').on('ended',function(){
      $(".backgroundVD").fadeOut();
     $(".esc").hide();
    });
  $(".esc").click(function(event){
     event.preventDefault();
    $(".backgroundVD").fadeOut();
     $(".esc").hide();
  }) 
  $(document).keyup(function(e) {
     if (e.key === "Escape") { // escape key maps to keycode `27`
       event.preventDefault();
    $(".backgroundVD").fadeOut();
     $(".esc").hide();
    }
});
});
