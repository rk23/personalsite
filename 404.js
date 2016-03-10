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

    var spaceOnly = document.getElementById("space-only");
    var sctx = spaceOnly.getContext("2d");

    for (i = 0; i < 10000; i++){

        var x = Math.random(spaceOnly.width) * 2000;
        var y = Math.random(spaceOnly.height) * 2000;
        var radius = Math.random();

        sctx.fillStyle = "white";
        sctx.beginPath();
        sctx.arc(x,y,radius,0,Math.PI*2,true);
        sctx.closePath();
        sctx.fill();
    }
}