/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// console.log("Hello, world!");

let srclist=["1","2","3","4","https://cdn.glitch.global/b8f7fe36-fd1a-40e9-8a86-3605c11486bc/path.mp4?v=1651201989036","https://cdn.glitch.global/b8f7fe36-fd1a-40e9-8a86-3605c11486bc/walk.mp4?v=1651201989092","7","8","9","10"]

$( ".num" ).click(function(e) {
  e.preventDefault();
  let index=$(this).children("a").attr("id");
   // console.log(srclist[index]);
  $(".vd").attr('src', srclist[index]);
  $(".backgroundVD").show();
});

