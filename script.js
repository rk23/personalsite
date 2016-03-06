var expandables     = document.getElementsByClassName("expandable");
var displayArticles = document.getElementsByClassName("display-article");
var projectImages   = document.getElementsByClassName("portfolio-pictures");
var portfolioList   = document.getElementsByName("3")[0];
var welcomePage     = document.getElementById('0');
var articles        = document.getElementsByClassName("content-box")[0].children;
var section1        = document.getElementsByClassName("section1");
var section2        = document.getElementsByClassName("section2");
var section3        = document.getElementsByClassName("section3");
var section4        = document.getElementsByClassName("section4");
var section5        = document.getElementsByClassName("section5");
var sections        = [section1, section2, section3, section4, section5];
var articlesOpened  = 0;
var portfolioOpenCount  = 0;
var portfolioArticle    = document.getElementById('3');

var doTransition = function(elem, apply){
    if(apply){
        elem.firstElementChild.style.display = "block";
    } else {
        elem.firstElementChild.style.display = "none";
    }
};
var displayWelcome = function(){
    if (articlesOpened > 0) {
        welcomePage.style.display = 'none';
    } else {
        welcomePage.style.display = 'block';
    }
}
var hideAll = function(elems, sectionNumber){
    for (var i = 0; i < elems.length; i++) {
        for (var k = 0; k < elems[i].children.length; k++){
            if(elems[i].children[k].firstElementChild && elems[i].children[k].firstElementChild.name.indexOf(sectionNumber) !== -1){
                elems[i].children[k].firstElementChild.classList.remove("active");
            }
            if(elems[i].children[k].firstElementChild.classList.contains("expandable")){
                elems[i].children[k].lastElementChild.style.display = "none";
            }
        }
    }
    for (i = 0; i < articles.length; i++){
        if(articles[i].id.indexOf(sectionNumber + ".") !== -1 && articles[i].style.display == "block"){
            articles[i].style.display = "none";
            articlesOpened--;
            if(sectionNumber.indexOf('3') !== -1){
                portfolioOpenCount--;
            }
        }
    }
    displayWelcome()
};

for (var i = 0; i < expandables.length; i++){
    expandables[i].addEventListener("click", function(e){
        if (e.srcElement.parentElement.lastElementChild.style.display == 'block'){
            e.srcElement.parentElement.lastElementChild.style.display = "none";
            hideAll(sections[parseInt(e.srcElement.name) - 1], e.srcElement.name)
        } else {
            e.srcElement.parentElement.lastElementChild.style.display = "block";
        }
    })
}
for (i = 0; i < displayArticles.length; i++){
    displayArticles[i].addEventListener("click", function(e){
        var selection           = e.srcElement;
        var sectionNumber       = selection.name;
        var targetSection       = document.getElementById(sectionNumber);
        var flag                = false;
        var isPortfolioOpen;

        if(targetSection.style.display == "block" || (sectionNumber == "3" && selection.parentElement.lastElementChild.style.display == "none")){
            targetSection.style.display = "none";
            e.srcElement.classList.remove("active")
            articlesOpened--;
            if (sectionNumber.indexOf("3.") !== -1){
                portfolioOpenCount--;
            }
            else if (sectionNumber === "3"){
                flag = true;
            }
        } else {
            targetSection.style.display = "block";
            e.srcElement.classList.add("active");
            articlesOpened++;
            if (sectionNumber.indexOf("3.") !== -1){
                portfolioOpenCount++;
            }
        }

        portfolioList.parentElement.lastElementChild.style.display == "none" ? isPortfolioOpen = false : isPortfolioOpen = true;

        console.log(portfolioOpenCount)
        if (portfolioArticle.style.display == "block" && sectionNumber.indexOf("3.") !== -1 && portfolioOpenCount > 0){
            portfolioArticle.style.display = "none";
            console.log(sectionNumber)
            portfolioList.classList.remove("active");
        }
        else if (portfolioOpenCount == 0
            && isPortfolioOpen
            && !flag
            && sectionNumber.indexOf("3.") !== -1){
            portfolioArticle.style.display = "block";
            portfolioList.classList.add("active");
        }

        displayWelcome();
    })
}
for (i = 0; i < projectImages.length; i++) {
    projectImages[i].addEventListener("mouseenter", function(e){
        doTransition(e.srcElement, true)
    })
    projectImages[i].addEventListener("mouseleave", function(e){
        doTransition(e.srcElement, false)
    })
}

//var c=document.getElementById("myCanvas");
//var ctx=c.getContext("2d");
//ctx.beginPath();
//ctx.moveTo(0,200);
//ctx.lineTo(5,200);
//ctx.lineTo(5,210);
//ctx.lineTo(5,190);
//ctx.lineTo(20,190);
//ctx.lineTo(20,215);
//ctx.lineTo(20,130);
//ctx.lineTo(60,130);
//
//ctx.strokeStyle = 'lime';
//
//ctx.stroke();

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(300,200,50,0,2*Math.PI);
ctx.fillStyle = 'gold';
ctx.fill();

ctx.beginPath();
ctx.arc(300, 200, 70, 0, 2*Math.PI);
ctx.strokeStyle = 'grey';
ctx.stroke();

ctx.beginPath();
ctx.arc(300,270,3,0,2*Math.PI);
ctx.fillStyle = 'grey';
ctx.fill();

ctx.beginPath();
ctx.arc(300, 200, 85, 0, 2*Math.PI);
ctx.strokeStyle = 'orange';
ctx.stroke();

ctx.beginPath();
ctx.arc(385,200,9,0,2*Math.PI);
ctx.fillStyle = 'orange';
ctx.fill();

ctx.beginPath();
ctx.arc(300, 200, 100, 0, 2*Math.PI);
ctx.strokeStyle = 'deepskyblue';
ctx.stroke();

ctx.beginPath();
ctx.arc(200,200,10,0,2*Math.PI);
ctx.fillStyle = 'deepskyblue';
ctx.fill();

ctx.beginPath();
ctx.arc(300, 200, 125, 0, 2*Math.PI);
ctx.strokeStyle = 'firebrick';
ctx.stroke();

ctx.beginPath();
ctx.arc(300,75,5,0,2*Math.PI);
ctx.fillStyle = 'firebrick';
ctx.fill();


ctx.beginPath();
ctx.arc(300, 200, 190, 0, 2*Math.PI);
ctx.strokeStyle = 'darkgrey';
ctx.stroke();

//ctx.beginPath();
//ctx.arc(300, 200, 310, 0, 2*Math.PI);
//ctx.strokeStyle = 'orange';
//ctx.stroke();
//
//window.addEventListener('load', eventWindowLoaded, false);
//function eventWindowLoaded() {
//    canvasApp();
//
//}
//
//function canvasSupport () {
//    return !!document.createElement("canvas").getContext;
//}
//
//function canvasApp() {
//
//    if (!canvasSupport()) {
//        return;
//    }
//
//    function  drawScreen () {
//
//        context.fillRect(0, 0, theCanvas.width, theCanvas.height);
//        //Box
//        context.strokeStyle = '#000000';
//        context.strokeRect(1,  1, theCanvas.width-2, theCanvas.height-2);
//
//        ball.x = circle.centerX + Math.cos(circle.angle) * circle.radius;
//        ball.y = circle.centerY + Math.sin(circle.angle) * circle.radius;
//
//        circle.angle += ball.speed;
//
//        context.fillStyle = "#000000";
//        context.beginPath();
//        context.arc(ball.x,ball.y,15,0,Math.PI*2,true);
//        context.closePath();
//        context.fill();
//
//    }
//
//    var radius = 100;
//    var circle = {centerX:250, centerY:250, radius:125, angle:0}
//    var ball = {x:0, y:0,speed:.1};
//
//    var mercury;
//    var venus;
//    var earth;
//    var mars;
//
//    theCanvas = document.getElementById("canvas");
//    context = theCanvas.getContext("2d");
//
//    setInterval(drawScreen, 33);
//
//}