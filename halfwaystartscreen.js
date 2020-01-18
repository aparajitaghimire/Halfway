var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth-20;
canvas.height = window.innerHeight-22;

var c = canvas.getContext('2d');

canvas.addEventListener('click', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    if (isInside(mousePos,rect)) {
      location.replace('https://google.com');
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
    c.fillStyle = 'blue';
    c.beginPath();
    c.arc(ball1x, window.innerHeight/2-45, 30, 0, Math.PI*2, true);
    c.strokeStyle = 'blue';
    c.stroke();
    c.closePath();
    c.fill();

    c.fillStyle = 'red';
    c.beginPath();
    c.arc(ball2x, window.innerHeight/2-45, 30, 0, Math.PI*2, false);
    c.strokeStyle = 'red';
    c.stroke();
    c.closePath();
    c.fill();
  }
  else{
    c.fillStyle = 'green';
    c.beginPath();
    c.arc(ball1x, window.innerHeight/2-45, radius, 0, Math.PI*2, false);
    c.strokeStyle = 'green';
    c.stroke();
    c.closePath();
    c.fill();

    c.fillStyle = 'black';
    c.font=i + "px Courier";
    c.textAlign = 'center';
    c.fillText("Halfway", canvas.width/2, canvas.height/2-20);
    c.fillStyle = 'black';
    c.fillRect(canvas.width/2-62.5, canvas.height/2+20, 125, 50);
    c.fillStyle = 'white';
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
  else {i+=0.1;}

}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  draw();
  update();

}

animate();
