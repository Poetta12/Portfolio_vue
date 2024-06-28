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

//******CHRAGEMENT STATS******

    