// Numéro de la diapositive
let numero = 0;

// Bande contenant toutes les images
const slides = document.querySelector(".slides");

// Toutes les diapositives
const slide = document.querySelectorAll(".slide");

// Nombre d'images
const total = slide.length;

// Fonction qui affiche la bonne image
function afficherSlide(){

    slides.style.transform = `translateX(-${numero*100}%)`;

}

// Flèche droite
document.getElementById("next").addEventListener("click",function(){

    numero++;

    if(numero>=total){

        numero=0;

    }

    afficherSlide();

});

// Flèche gauche
document.getElementById("prev").addEventListener("click",function(){

    numero--;

    if(numero<0){

        numero=total-1;

    }

    afficherSlide();

});