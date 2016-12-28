var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
const WAKEUPTIME = 8;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawTime(ctx, radius, WAKEUPTIME);
  drawNumbers(ctx, radius);
}

function drawFace(ctx, radius) {
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'antiquewhite';
  ctx.fill();
  ctx.lineWidth = radius*0.00;
//    ctx.stroke();
  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  var twelve;
  ctx.font = radius*0.09 + "px roboto";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 25; num++){
    ang = num * Math.PI / 12 - (16 + WAKEUPTIME - 8) * Math.PI / 12;
    twelve = num%12;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(twelve == 0 ? '12' : twelve.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius, WAKEUPTIME){
  var dt = new Date();
  var hour = dt.getHours();
  var second = dt.getSeconds() + (60 * dt.getMinutes()) + (60 * 60 * dt.getHours())
  hour < WAKEUPTIME ? second += 86400 - WAKEUPTIME * 60 * 60: second -= WAKEUPTIME * 60 * 60;
  var pos=((second - 8 * 60 * 60)*Math.PI/43200);
  drawHand(ctx, pos, radius *.75, radius*0.02, second, hour);
}

function drawHand(ctx, pos, length, width, second) {
  ctx.font = radius*0.2 + "px roboto";
  ctx.fontFamily = 'sans-serif';
  ctx.strokeStyle= "#0C0029";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  ctx.fillText((86400-second).toString(), 0, 0);
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0,0);
  ctx.rotate(pos);
  ctx.moveTo(0, -length * .5);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}
