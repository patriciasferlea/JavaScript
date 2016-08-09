
  var canvas = document.getElementById("paint");
  var ctx = canvas.getContext("2d");
  
  var sketch = document.querySelector('#sketch');
  var sketch_style = getComputedStyle(sketch);
 

  var mouse = { x: 0, y: 0 };

  /* Mouse */
    canvas.addEventListener('mousemove', function (e) {
    mouse.x = e.pageX - this.offsetLeft; /*mouse position in the canvas*/
    mouse.y = e.pageY - this.offsetTop;
  }, false);


  /* Drawing */
  ctx.lineWidth = 5;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'red';

  canvas.addEventListener('mousedown', function (e) {
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);

    canvas.addEventListener('mousemove', onPaint, false);
  }, false);

  /* you can stop at a certain point and then draw again from another*/
   canvas.addEventListener('mouseup', function () {
    canvas.removeEventListener('mousemove', onPaint, false);
  }, false);

  /* draw the line*/
  var onPaint = function () {
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke(); 
  };

