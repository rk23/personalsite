var logo            = document.getElementById("logo");
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

logo.addEventListener("click", function(e){
    var highlightedElements = document.getElementsByClassName("active");
    var heLength            = highlightedElements.length;

    //As I remove the class 'active', the element gets removed from the variable
    //highlightedElements. So I only access the first element because the list
    //is auto reducing. Same need for recording the length seperately.
    for(i = 0; i < heLength; i++){
        highlightedElements[0].classList.remove("active");
    }
    for (i = 0; i < expandables.length; i++){
        expandables[i].parentElement.lastElementChild.style.display = "none";
    }
    for (i = 0; i < articles.length; i++){
        articles[i].style.display = 'none';
    }
    welcomePage.style.display = "block";
})

for (var i = 0; i < expandables.length; i++){
    expandables[i].addEventListener("click", function(e){
        if (e.target.parentElement.lastElementChild.style.display == 'block'){
            e.target.parentElement.lastElementChild.style.display = "none";
            hideAll(sections[parseInt(e.target.name) - 1], e.target.name)
        } else {
            e.target.parentElement.lastElementChild.style.display = "block";
        }
    })
}
for (i = 0; i < displayArticles.length; i++){
    displayArticles[i].addEventListener("click", function(e){
        var selection           = e.target;
        var sectionNumber       = selection.name;
        var targetSection       = document.getElementById(sectionNumber);
        var flag                = false;
        var isPortfolioOpen;

        if(targetSection.style.display == "block" || (sectionNumber == "3" && selection.parentElement.lastElementChild.style.display == "none")){
            targetSection.style.display = "none";
            e.target.classList.remove("active")
            articlesOpened--;
            //if (sectionNumber.indexOf("3.") !== -1){
            //    portfolioOpenCount--;
            //}
            //else if (sectionNumber === "3"){
            //    flag = true;
            //}
        } else {
            targetSection.style.display = "block";
            e.target.classList.add("active");
            articlesOpened++;
            //if(alternateBackground){
            //   //targetSection.style.backgroundColor = "#f9f9f9";
            //}
            //alternateBackground = !alternateBackground;
            //if (sectionNumber.indexOf("3.") !== -1){
            //    portfolioOpenCount++;
            //}
        }
        //
        //portfolioList.parentElement.lastElementChild.style.display == "none" ? isPortfolioOpen = false : isPortfolioOpen = true;
        //
        //if (portfolioArticle.style.display == "block" && sectionNumber.indexOf("3.") !== -1 && portfolioOpenCount > 0){
        //    portfolioArticle.style.display = "none";
        //    portfolioList.classList.remove("active");
        //}
        //else if (portfolioOpenCount == 0
        //    && isPortfolioOpen
        //    && !flag
        //    && sectionNumber.indexOf("3.") !== -1){
        //    portfolioArticle.style.display = "block";
        //    portfolioList.classList.add("active");
        //}

        displayWelcome();
    })
}
for (i = 0; i < projectImages.length; i++) {
    projectImages[i].addEventListener("mouseenter", function(e){
        doTransition(e.target, true)
    })
    projectImages[i].addEventListener("mouseleave", function(e){
        doTransition(e.target, false)
    })
}
