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

    function drawScreen () {

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

        mercuryOrbit.angle  += mercury.speed;
        venusOrbit.angle    += venus.speed;
        earthOrbit.angle    += earth.speed;
        marsOrbit.angle     += mars.speed;
        jupiterOrbit.angle  += jupiter.speed;


        ctx.fillStyle = mercury.color;
        ctx.beginPath();
        ctx.arc(mercury.x,mercury.y,2.24,0,Math.PI*2,true);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = venus.color;
        ctx.beginPath();
        ctx.arc(venus.x,venus.y,6,0,Math.PI*2,true);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = earth.color;
        ctx.beginPath();
        ctx.arc(earth.x,earth.y,6,0,Math.PI*2,true);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = mars.color;
        ctx.beginPath();
        ctx.arc(mars.x,mars.y,3,0,Math.PI*2,true);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = jupiter.color;
        ctx.beginPath();
        ctx.arc(jupiter.x,jupiter.y,30,0,Math.PI*2,true);
        ctx.closePath();
        ctx.fill();
        //
        //last = ctx;
    }

    var centerXOffset = 400;
    var centerYOffset = 300;
    if (window.innerWidth < 800){
        centerXOffset = 400;
        centerYOffset = 600;
    }

    var mercuryOrbit = {centerX: centerXOffset, centerY: centerYOffset, radius: 90, angle: 90};
    var mercury = {x: 0, y: 0, speed:.0145, color: 'grey'};

    var venusOrbit = {centerX: centerXOffset, centerY: centerYOffset, radius: 120, angle: 180};
    var venus = {x: 0, y: 0, speed:.0056, color: 'orange'};

    var earthOrbit = {centerX: centerXOffset, centerY: centerYOffset, radius: 150, angle: 270};
    var earth = {x: 0, y: 0, speed:.0035, color: 'deepskyblue'};

    var marsOrbit = {centerX: centerXOffset, centerY: centerYOffset, radius: 200, angle: 10};
    var mars = {x: 0, y: 0, speed:.00186, color: 'firebrick'};

    var jupiterOrbit = {centerX: centerXOffset, centerY: centerYOffset, radius: 310, angle: 10}
    var jupiter = {x: 0, y: 0, speed:.000235, color: 'tan'}

    var c = document.getElementById("planets");
    var ctx = c.getContext("2d");

    var background = document.getElementById("space");
    var bctx = background.getContext("2d");

    //bctx.beginPath();
    //bctx.arc(centerXOffset,centerYOffset,400,0,2*Math.PI);
    //bctx.fillStyle = 'black';
    //bctx.fill();

    bctx.fillStyle = 'black';
    bctx.fillRect(0, 0, c.width, c.height);

    for (i = 0; i < 1000; i++){

        var x = Math.random(c.width) * 1000;
        var y = Math.random(c.height) * 1000;
        var radius = Math.random();

        bctx.fillStyle = "white";
        bctx.beginPath();
        bctx.arc(x,y,radius,0,Math.PI*2,true);
        bctx.closePath();
        bctx.fill();
    }

    bctx.beginPath();
    bctx.arc(centerXOffset,centerYOffset,50,0,2*Math.PI);
    bctx.fillStyle = 'gold';
    bctx.fill();


    setInterval(drawScreen, 33);

}