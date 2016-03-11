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


}