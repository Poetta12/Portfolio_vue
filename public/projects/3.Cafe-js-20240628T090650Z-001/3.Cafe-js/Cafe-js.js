//********************BOUTONS TABLEAU MENU****************
var food = document.querySelector("#food");
var boire = document.querySelector("#boire");
var eat = document.querySelector("#eat");
var drink = document.querySelector("#drink");

food.addEventListener("click", function(){
  eat.classList.remove("hide");
  food.classList.add("decor");
  drink.classList.add("hide");
  boire.classList.remove("decor");
})
boire.addEventListener("click", function(){
  eat.classList.add("hide");
  food.classList.remove("decor");
  drink.classList.remove("hide");
  boire.classList.add("decor");
})

//********************TABLEAU MENU****************
var eatList = document.querySelector("#eat");
var drinkList = document.querySelector("#drink");

//********************TABLEAU FOOD****************
var tableauMenu = [{
  titre: "Bread Basket",
  descrip: "Assortment of fresh baked fruit breads and muffins 5.50"
},
{
  titre: "Honey Almond Granola with Fruits",
  descrip: "Natural cereal of honey toasted oats, raisins, almonds and dates 7.00"
},
{
  titre: "Belgian Wafle",
  descrip: "Vanilla flavored batter with malted flour 7.50"
},
{
  titre: "Scrambled eggs",
  descrip: "Scrambled eggs, roasted red pepper and garlic, with green onions 7.50"
},
{
  titre: "Blueberry Pancakes",
  descrip: "With syrup, butter and lots of berries 8.50"
}];

tableauMenu.forEach(function(produit){
  var bloc = document.createElement("article");
  var titre = document.createElement("h6");
  var descrip = document.createElement("p");
  eatList.appendChild(bloc);
  bloc.appendChild(titre);
  bloc.appendChild(descrip);
  titre.innerHTML = produit.titre;
  descrip.innerHTML = produit.descrip;
})

//********************TABLEAU DRINK****************
var tableauMenu1 = [{
  titre: "Expresso",
  descrip: "Assortment of fresh baked fruit breads and muffins 5.50"
},
{
  titre: "mocaccino",
  descrip: "Natural cereal of honey toasted oats, raisins, almonds and dates 7.00"
},
{
  titre: "Capuccino",
  descrip: "Vanilla flavored batter with malted flour 7.50"
},
{
  titre: "Coca Cola",
  descrip: "Scrambled eggs, roasted red pepper and garlic, with green onions 7.50"
},
{
  titre: "MilkShakes",
  descrip: "With syrup, butter and lots of berries 8.50"
}];

tableauMenu1.forEach(function(produit1){
  var bloc = document.createElement("article");
  var titre = document.createElement("h6");
  var descrip = document.createElement("p");
  drinkList.appendChild(bloc);
  bloc.appendChild(titre);
  bloc.appendChild(descrip);
  titre.innerHTML = produit1.titre;
  descrip.innerHTML = produit1.descrip;
})

//****************TIROIRS FAQ**********************
var armario = document.querySelector("#faq");

var armoireFaq = [{
  question: "Can i reserve a table?",
  reponse: "Yes, call us to make a reservation. "
},
{
  question: "Can I privatize the café for an event?",
  reponse: "Yes, from 20 people to 50 people, call us for more information. "
},
{
  question: "There is a parking?",
  reponse: "Yes, with 30 places. "
}];

  armoireFaq.forEach(function(tiroirFaq){
    var article = document.createElement("article");
    var button = document.createElement("button");
    var reponse = document.createElement("p");

    armario.appendChild(article);
    article.appendChild(button);
    article.appendChild(reponse);

    reponse.classList.add("hide");
    button.textContent = tiroirFaq.question;
    reponse.textContent = tiroirFaq.reponse;
  })

//****************BOUTONS FAQ**********************
var faq = document.querySelector("#faq");
var tiroirR = document.querySelector(".reponse");

var boutonsAll = faq.querySelectorAll("button")
var tiroirAll = faq.querySelectorAll("p")

boutonsAll.forEach(function(bouton, index){
  bouton.addEventListener("click", function(){
      if(boutonsAll[index] && tiroirAll[index].classList.contains("hide")){
        tiroirAll[index].classList.remove("hide")
        boutonsAll[index].classList.add("after");
      }
      else{
        tiroirAll[index].classList.add("hide");
        boutonsAll[index].classList.remove("after");
      }
  })
});