var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth-20;
canvas.height = window.innerHeight-22;

var c = canvas.getContext('2d');

canvas.addEventListener('click', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    if (isInside(mousePos,rect)) {
      location.replace('Page2.html');
    }
});

function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function isInside(pos, rect){
  if(twocircleflag==false) 
    return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
}

var rect = {
    x:canvas.width/2-62.5,
    y:canvas.height/2+20,
    width:125,
    height:50
};

var ball1x = 15;
var ball2x = canvas.width-15;
var twocircleflag = true;
var radius = 30;
var counter =0;
var x = 0;
var i = 0;

function draw() {
  if(twocircleflag==true) {
    c.fillStyle = 'rgb(255, 151, 15)';
    c.beginPath();
    c.arc(ball1x, window.innerHeight/2-25, 30, 0, Math.PI*2, true);
    c.strokeStyle = 'rgb(255, 151, 15)';
    c.stroke();
    c.closePath();
    c.fill();

    c.fillStyle = 'rgb(93, 144, 227)';
    c.beginPath();
    c.arc(ball2x, window.innerHeight/2-25, 30, 0, Math.PI*2, false);
    c.strokeStyle = 'rgb(93, 144, 227)';
    c.stroke();
    c.closePath();
    c.fill();
  }
  else{
    c.fillStyle = '#FF6666';
    c.beginPath();
    c.arc(ball1x, window.innerHeight/2-25, radius, 0, Math.PI*2, false);
    c.strokeStyle = '#FF6666';
    c.stroke();
    c.closePath();
    c.fill();

    c.fillStyle = 'rgb(176, 32, 32)';
    c.font=i + "px Courier";
    c.textAlign = 'center';
    c.fillText("Halfway", canvas.width/2, canvas.height/2-20);
    c.fillStyle = 'rgb(184, 35, 35)';
    c.fillRect(canvas.width/2-62.5, canvas.height/2+20, 125, 50);
    c.fillStyle = 'rgb(255, 181, 181)';
    c.font="20px Courier";
    c.fillText("START", canvas.width/2, canvas.height/2+48);
  }
}

function update() {
  if(ball1x!=ball2x) {
    ball1x+=5;
    ball2x-=5;
  }
  if(ball1x==ball2x) {
    twocircleflag=false;
    radius+=5;
  }
  counter+=1;
  if(i>=100) {i=100;}
  else {i+=0.2;}

}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  draw();
  update();

}

animate();
