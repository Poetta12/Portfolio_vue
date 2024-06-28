//******BIBLIOTHEQUE FEEDS******
      var feeds = document.querySelector("section.feeds")
      var data = [{
        icone: "analytics/assets/man-user-blue.png",
        alt: "man-user-blue",
        sujet: "New record, over 90 views",
        temps: 10
      },
      {
        icone : "analytics/assets/notifications-button-red.png",
        alt : "notifications-button-red",
        sujet : "Database error",
        temps : 15
     },
     {
        icone : "analytics/assets/multiple-users-silhouette-yellow.png",
        alt : "nmultiple-users-silhouette-yellow",
        sujet : "New record, over 40 views",
      temps : 17
     },
     {
        icone : "analytics/assets/chat-bubble-red.png",
        alt : "chat-bubble-red.png",
        sujet : "New comments",
        temps : 25
     },
     {
        icone : "analytics/assets/bookmark-blue.png",
        alt : "bookmark-blue",
        sujet : "Check transactions",
        temps : 28
     },
     {
        icone : "analytics/assets/open-laptop-computer.png",
        alt : "open-laptop-computer",
        sujet : "CPU overload",
        temps : 35
     },
     {
        icone : "analytics/assets/sharing-interface-green.png",
        alt : "sharing-interface-green",
        sujet : "News shares",
        temps : 39
     }];
      data.forEach(function(onglet){
        var article = document.createElement("article");
        var div = document.createElement("div");
        var figure = document.createElement("figure");
        var image = document.createElement("img");
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        feeds.appendChild(article);
        article.appendChild(div);
        article.appendChild(p2);
        div.appendChild(figure);
        div.appendChild(p1);
        figure.appendChild(image);
        image.src=onglet.icone;
        image.alt=onglet.alt;
        p1.innerHTML=onglet.sujet;
        p2.innerHTML= onglet.temps+" mins";

        
      })
//******NAV******
    var open = document.querySelector("#open");
    var box =  document.querySelector("#box");
    var bp1 =  document.querySelector("#bp1");
    var bp2 =  document.querySelector("#bp2");
    var bp3 =  document.querySelector("#bp3");
    var bp4 =  document.querySelector("#bp4");
    var bp5 =  document.querySelector("#bp5");
    var bp6 =  document.querySelector("#bp6");
    var bp7 =  document.querySelector("#bp7");
    var bp8 =  document.querySelector("#bp8");
    var bp9 =  document.querySelector("#bp9");
    var body =  document.querySelector("body");

    open.addEventListener("click", function(){
      if(box.classList.contains("hide")){
        box.classList.remove("hide");
        body.style.overflow="hidden";
      }
      else{
        box.classList.add("hide");
        body.style.overflow="auto";
      }
      
     
    })
    bp1.addEventListener("click", function(){
      box.classList.add("hide");
      body.style.overflow="auto";
    })
    bp2.addEventListener("click", function(){
      box.classList.add("hide");
      body.style.overflow="auto";
    })
    bp3.addEventListener("click", function(){
      box.classList.add("hide");
      body.style.overflow="auto";
    })
    bp4.addEventListener("click", function(){
      box.classList.add("hide");
      body.style.overflow="auto";
    })
    bp5.addEventListener("click", function(){
      box.classList.add("hide");
      body.style.overflow="auto";
    })
    bp6.addEventListener("click", function(){
      box.classList.add("hide");
      body.style.overflow="auto";
    })
    bp7.addEventListener("click", function(){
      box.classList.add("hide");
      body.style.overflow="auto";
    })
    bp8.addEventListener("click", function(){
      box.classList.add("hide");
      body.style.overflow="auto";
    })
    bp9.addEventListener("click", function(){
      box.classList.add("hide");
      body.style.overflow="auto";
    })

//******SLIDE SHOW******
var leftBouton = document.querySelector("#left");
var rightBouton = document.querySelector("#right");
var container = document.querySelector(".carousel");
var carousel_inner = document.querySelector(".carousel_inner");
var carousel_item = document.querySelector(".carousel_item");

var slidesAll = document.querySelectorAll(".carousel_item");

//Width de la class carousel
var contWidth = container.getBoundingClientRect().width;

//Width de la class carousel_inner
var carInnerW = contWidth * slidesAll.length;
 console.log(carInnerW)

slidesAll.forEach(function(slide, index){
  //Width de la class carousel_item
var carItemW = carousel_item.style.width = contWidth + "px";

  leftBouton.addEventListener("click",function(){
    if(slide.classList.contains("prev100")||slide.classList.contains("next200")){
      slide.classList.remove("prev100");
      slide.classList.remove("next200");
      slide.classList.add("next0");
      leftBouton.classList.add("hide")
    }
    else if(slide.classList.contains("prev200")){
      slide.classList.remove("prev200");
      slide.classList.add("next200");
      rightBouton.classList.remove("hide")
    }
    else if(slide.classList.contains("next200")){
      leftBouton.classList.add("hide")
      rightBouton.classList.remove("hide")
    }
    else if(slide.classList.contains("next0")){
      leftBouton.classList.add("hide")
    }
  })
  
  rightBouton.addEventListener("click",function(){
    if(slide.classList.contains("prev100")){
      slide.classList.remove("prev100");
      slide.classList.add("prev200");
      leftBouton.classList.remove("hide");
      rightBouton.classList.add("hide")
    }
    else if(slide.classList.contains("next0")){
      slide.classList.remove("next0");
      slide.classList.add("prev100")
      leftBouton.classList.remove("hide");
    }
    else if(slide.classList.contains("next200")){
      slide.classList.remove("next200");
      slide.classList.add("prev200")
      rightBouton.classList.add("hide")
    }
    else{
      slide.classList.add("prev100");
      leftBouton.classList.remove("hide")
    }
  })
  
})



