var imagecount = 1;
 var total = 8;

 function slider(x) {
     var image = document.getElementById('img');
     imagecount = imagecount + x;
     if (imagecount > total) { imagecount = 1; }
     if (imagecount < 1) { imagecount = total; }
     image.src = "content/imges/img" + imagecount + ".jpg";
 }