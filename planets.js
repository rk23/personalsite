window.addEventListener('load', eventWindowLoaded, false);
function eventWindowLoaded() {
    canvasApp();
}
function canvasSupport () {
    return !!document.createElement("canvas").getContext;
}

function canvasApp() {

    if (!canvasSupport()) {
        return;
    }

    function drawScreen() {

        ctx.clearRect(0, 0, c.width, c.height);

        mercury.x = mercuryOrbit.centerX + Math.cos(mercuryOrbit.angle) * mercuryOrbit.radius;
        mercury.y = mercuryOrbit.centerY + Math.sin(mercuryOrbit.angle) * mercuryOrbit.radius;

        venus.x = venusOrbit.centerX + Math.cos(venusOrbit.angle) * venusOrbit.radius;
        venus.y = venusOrbit.centerY + Math.sin(venusOrbit.angle) * venusOrbit.radius;

        earth.x = earthOrbit.centerX + Math.cos(earthOrbit.angle) * earthOrbit.radius;
        earth.y = earthOrbit.centerY + Math.sin(earthOrbit.angle) * earthOrbit.radius;

        mars.x = marsOrbit.centerX + Math.cos(marsOrbit.angle) * marsOrbit.radius;
        mars.y = marsOrbit.centerY + Math.sin(marsOrbit.angle) * marsOrbit.radius;

        jupiter.x = jupiterOrbit.centerX + Math.cos(jupiterOrbit.angle) * jupiterOrbit.radius;
        jupiter.y = jupiterOrbit.centerY + Math.sin(jupiterOrbit.angle) * jupiterOrbit.radius;

        mercuryOrbit.angle += mercury.speed;
        venusOrbit.angle += venus.speed;
        earthOrbit.angle += earth.speed;
        marsOrbit.angle += mars.speed;
        jupiterOrbit.angle += jupiter.speed;


        ctx.fillStyle = mercury.color;
        ctx.beginPath();
        ctx.arc(mercury.x, mercury.y, 2.24, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = venus.color;
        ctx.beginPath();
        ctx.arc(venus.x, venus.y, 6, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = earth.color;
        ctx.beginPath();
        ctx.arc(earth.x, earth.y, 6, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = mars.color;
        ctx.beginPath();
        ctx.arc(mars.x, mars.y, 3, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = jupiter.color;
        ctx.beginPath();
        ctx.arc(jupiter.x, jupiter.y, 20, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        //
        //last = ctx;
    }

    var c = document.getElementById("planets");
    var ctx = c.getContext("2d");


    var background = document.getElementById("space");
    var bctx = background.getContext("2d");
    //
    //bctx.beginPath();
    //bctx.arc(centerXOffset,centerYOffset,400,0,2*Math.PI);
    //bctx.fillStyle = 'black';
    //bctx.fill();

    //bctx.fillStyle = 'black';
    //bctx.fillRect(0, 0, c.width, c.height);

    var centerXOffset = 400;
    var centerYOffset = 350;
    if (window.innerWidth < 800) {
        centerXOffset = 400;
        centerYOffset = 350;
    }
    if (window.location.href.indexOf('404') !== -1){
        for (i = 0; i < 5000; i++){

            var x = Math.random(c.width) * 2000;
            var y = Math.random(c.height) * 2000;
            var radius = Math.random();

            bctx.fillStyle = "white";
            bctx.beginPath();
            bctx.arc(x,y,radius,0,Math.PI*2,true);
            bctx.closePath();
            bctx.fill();
        }
        centerXOffset = 500;
        centerYOffset = 500;
    }

    bctx.beginPath();
    bctx.arc(centerXOffset, centerYOffset, 50, 0, 2 * Math.PI);
    bctx.fillStyle = 'gold';
    bctx.fill();


    var mercuryOrbit = {centerX: centerXOffset, centerY: centerYOffset, radius: 90, angle: 90};
    var mercury = {x: 0, y: 0, speed: .0145, color: 'grey'};

    var venusOrbit = {centerX: centerXOffset, centerY: centerYOffset, radius: 120, angle: 180};
    var venus = {x: 0, y: 0, speed: .0056, color: 'orange'};

    var earthOrbit = {centerX: centerXOffset, centerY: centerYOffset, radius: 150, angle: 270};
    var earth = {x: 0, y: 0, speed: .0035, color: 'deepskyblue'};

    var marsOrbit = {centerX: centerXOffset, centerY: centerYOffset, radius: 200, angle: 10};
    var mars = {x: 0, y: 0, speed: .00186, color: 'firebrick'};

    var jupiterOrbit = {centerX: centerXOffset, centerY: centerYOffset, radius: 310, angle: 10}
    var jupiter = {x: 0, y: 0, speed: .000235, color: 'tan'}



    setInterval(drawScreen, 33);

}