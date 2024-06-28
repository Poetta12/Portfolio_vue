var galerie = document.querySelector("#galerie");

var zoom = document.createElement("div");
var figure = document.createElement("figure");
var image = document.createElement("img");
var button = document.createElement("button");

var imagesAll = document.querySelectorAll("#galerie img");

imagesAll.forEach(function(picture, index){
		picture.addEventListener("click", function(){
			galerie.appendChild(zoom);
			zoom.appendChild(figure);
			figure.appendChild(image)
			figure.appendChild(button)
			button.textContent = "X";
			image.setAttribute("src", picture.src)
		})
})

button.addEventListener("click", function () {
			galerie.removeChild(zoom);
})



