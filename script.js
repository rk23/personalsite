var logo            = document.getElementById("logo");
var employerTrack   = document.getElementById("employers");
var friendsTrack    = document.getElementById("friends");
var expandables     = document.getElementsByClassName("expandable");
var displayArticles = document.getElementsByClassName("display-article");
var projectImages   = document.querySelector(".portfolio img");
var welcomePage     = document.getElementById('0');
var start           = document.getElementById("start");
var startButton     = document.getElementById("start-button");
var topButton       = document.getElementById("top-button");
var articles        = document.getElementsByClassName("content-box")[0].children;
var section1        = document.getElementsByClassName("section1");
var section2        = document.getElementsByClassName("section2");
var section3        = document.getElementsByClassName("section3");
var section4        = document.getElementsByClassName("section4");
var section5        = document.getElementsByClassName("section5");
var sections        = [section1, section2, section3, section4, section5];
var articlesOpened  = 0;

var displayTopButton = function(){
    if (articlesOpened > 3) {
        topButton.style.display = 'block'
    } else {
        topButton.style.display = 'none'
    }
}
var displayWelcome = function(){
    if (articlesOpened > 0) {
        welcomePage.style.display = 'none';
    } else {
        welcomePage.style.display = 'block';
    }
    displayTopButton()
};
var toggleHighlight = function(e){
    var selection           = e.target;
    var sectionNumber       = selection.name;
    var targetSection       = document.getElementById(sectionNumber);

    if(targetSection.style.display == "block"){
        targetSection.style.display = "none";
        e.target.classList.remove("active")
        articlesOpened--;
    } else {
        targetSection.style.display = "block";
        e.target.classList.add("active");
        articlesOpened++;
    }
}
var hideAll = function(){
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
    topButton.style.display = 'none'
    articlesOpened = 0;
};
var hideSection = function(elems, sectionNumber){
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
        }
    }
    displayWelcome()
};
var openTrack = function(sectionNumbers){
    sectionNumbers.forEach(function(sectionNumber){
        var element = document.getElementsByName(sectionNumber)[0]
        if (element.classList.contains("expandable")){
            element.parentElement.lastElementChild.style.display = "block";
        }
        element.classList.add("active")

        var article = document.getElementById(sectionNumber)
        article.style.display = "block"
        articlesOpened++;
    })
    topButton.style.display = 'block'
};

logo.addEventListener("click", function(){
    hideAll();
});

startButton.addEventListener("click", function(e){
    if (!e.target.classList.contains('active')){
        hideAll();
        toggleHighlight(e)
        welcomePage.style.display = 'none';
    } else {
        hideAll();
    }
    displayWelcome()
})

employerTrack.addEventListener("click", function(e){
    start.style.display = "none";
    startButton.classList.remove("active");
    openTrack([1, 2, 2.1, 2.2, 2.3, 3, 6])
})

friendsTrack.addEventListener("click", function(){
    start.style.display = "none";
    startButton.classList.remove("active");
    openTrack([1, 1.1, "1.3.1", "1.3.4", 3, 5])
})

for (var i = 0; i < expandables.length; i++){
    expandables[i].addEventListener("click", function(e){
        if (e.target.parentElement.lastElementChild.style.display == 'block'){
            e.target.parentElement.lastElementChild.style.display = "none";
            hideSection(sections[parseInt(e.target.name) - 1], e.target.name)
        } else {
            e.target.parentElement.lastElementChild.style.display = "block";
        }
    })
}
for (i = 0; i < displayArticles.length; i++){
    displayArticles[i].addEventListener("click", function(e){
        toggleHighlight(e)
        displayWelcome();
        displayTopButton()
    })
}