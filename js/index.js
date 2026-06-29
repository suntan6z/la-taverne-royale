// Numéro de la diapositive
let numero = 0;

// Bande contenant toutes les images
const slides = document.querySelector(".slides");

// Toutes les diapositives
const slide = document.querySelectorAll(".slide");

// Tous les points
const dots = document.querySelectorAll(".dot");

// Nombre d'images
const total = slide.length;

// Fonction qui affiche la bonne image
function afficherSlide(){

    slides.style.transform = `translateX(-${numero*100}%)`;

    // On enlève le point actif
    dots.forEach(function(dot){
        dot.classList.remove("active");
    });

    // On active le bon point
    dots[numero].classList.add("active");

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

// Clic sur les points
dots.forEach(function(dot,index){

    dot.addEventListener("click",function(){

        numero=index;

        afficherSlide();

    });

});