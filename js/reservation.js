// ===== La Taverne Royale — Calendrier de réservation =====
// Calendrier de disponibilités + créneaux horaires, basés sur les horaires
// d'ouverture affichés sur la page contact. Site fictif : aucune base de
// données, l'envoi du formulaire renvoie vers la page de confirmation.

// Fenêtres de service par jour de la semaine (0 = dimanche … 6 = samedi).
// Chaque fenêtre : ["début", "fin"] au format 24h.
const HORAIRES = {
  0: [["12:00", "15:00"]],                        // Dimanche : déjeuner
  1: [],                                          // Lundi : fermé
  2: [["12:00", "14:30"], ["19:00", "22:30"]],    // Mardi
  3: [["12:00", "14:30"], ["19:00", "22:30"]],    // Mercredi
  4: [["12:00", "14:30"], ["19:00", "22:30"]],    // Jeudi
  5: [["12:00", "14:30"], ["19:00", "22:30"]],    // Vendredi
  6: [["12:00", "15:00"], ["19:00", "23:00"]],    // Samedi
};

// Intervalle entre deux créneaux (minutes) et marge avant la fermeture :
// on ne propose pas de table trop près de la fin du service.
const PAS_MINUTES = 30;
const MARGE_FERMETURE = 30;

const MOIS_FR = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];
const JOURS_FR = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
const JOURS_COMPLETS = [
  "dimanche", "lundi", "mardi", "mercredi",
  "jeudi", "vendredi", "samedi",
];

// Éléments du DOM
const calTitre = document.getElementById("cal-titre");
const calGrille = document.getElementById("cal-grille");
const btnPrev = document.getElementById("cal-prev");
const btnNext = document.getElementById("cal-next");
const creneauxInvite = document.getElementById("creneaux-invite");
const creneauxConteneur = document.getElementById("creneaux");
const champDate = document.getElementById("resa-date");
const champHeure = document.getElementById("resa-heure");
const formulaire = document.getElementById("form-reservation");

// Date du jour, sans l'heure (pour comparer les jours entre eux)
const aujourdhui = new Date();
aujourdhui.setHours(0, 0, 0, 0);

// Mois actuellement affiché par le calendrier
let moisAffiche = new Date(aujourdhui.getFullYear(), aujourdhui.getMonth(), 1);

// Date sélectionnée par l'utilisateur (objet Date ou null)
let dateChoisie = null;

// ----- Utilitaires -----

// "12:00" -> nombre de minutes depuis minuit
function versMinutes(heure) {
  const [h, m] = heure.split(":").map(Number);
  return h * 60 + m;
}

// nombre de minutes -> "12:30"
function versHeure(minutes) {
  const h = String(Math.floor(minutes / 60)).padStart(2, "0");
  const m = String(minutes % 60).padStart(2, "0");
  return `${h}:${m}`;
}

// Génère les créneaux d'une fenêtre de service, en s'arrêtant MARGE_FERMETURE
// avant la fin.
function creneauxDeFenetre([debut, fin]) {
  const liste = [];
  const dernier = versMinutes(fin) - MARGE_FERMETURE;
  for (let t = versMinutes(debut); t <= dernier; t += PAS_MINUTES) {
    liste.push(versHeure(t));
  }
  return liste;
}

// Un jour est-il fermé (lundi ou aucun service) ?
function estFerme(date) {
  return (HORAIRES[date.getDay()] || []).length === 0;
}

// Date -> "samedi 12 juillet 2026"
function dateLisible(date) {
  return `${JOURS_COMPLETS[date.getDay()]} ${date.getDate()} ` +
    `${MOIS_FR[date.getMonth()].toLowerCase()} ${date.getFullYear()}`;
}

// ----- Rendu du calendrier -----

function afficherCalendrier() {
  const annee = moisAffiche.getFullYear();
  const mois = moisAffiche.getMonth();

  calTitre.textContent = `${MOIS_FR[mois]} ${annee}`;
  calGrille.innerHTML = "";

  // En-têtes des jours (Lun → Dim)
  JOURS_FR.forEach((nom) => {
    const cell = document.createElement("div");
    cell.className = "cal-jour-nom";
    cell.textContent = nom;
    calGrille.appendChild(cell);
  });

  // Décalage avant le 1er du mois (semaine commençant le lundi)
  const premierJour = new Date(annee, mois, 1);
  let decalage = premierJour.getDay() - 1; // getDay: 0=dim
  if (decalage < 0) decalage = 6;          // dimanche -> fin de semaine
  for (let i = 0; i < decalage; i++) {
    const vide = document.createElement("div");
    vide.className = "cal-jour vide";
    calGrille.appendChild(vide);
  }

  // Jours du mois
  const nbJours = new Date(annee, mois + 1, 0).getDate();
  for (let j = 1; j <= nbJours; j++) {
    const date = new Date(annee, mois, j);
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = "cal-jour";
    cell.textContent = j;

    const passe = date < aujourdhui;
    if (passe || estFerme(date)) {
      cell.classList.add("disabled");
      cell.disabled = true;
    } else {
      cell.addEventListener("click", () => choisirJour(date, cell));
    }

    if (dateChoisie && date.getTime() === dateChoisie.getTime()) {
      cell.classList.add("selected");
    }

    calGrille.appendChild(cell);
  }

  // Empêcher de reculer avant le mois courant
  const memeMoisQueCourant =
    annee === aujourdhui.getFullYear() && mois === aujourdhui.getMonth();
  btnPrev.disabled = memeMoisQueCourant;
  btnPrev.classList.toggle("disabled", memeMoisQueCourant);
}

// ----- Sélection d'un jour -----

function choisirJour(date, cell) {
  dateChoisie = date;

  // Surlignage
  calGrille.querySelectorAll(".cal-jour.selected")
    .forEach((el) => el.classList.remove("selected"));
  cell.classList.add("selected");

  // Renseigner le champ date (valeur lisible envoyée au formulaire)
  champDate.value = dateLisible(date);

  // Réinitialiser l'heure : elle dépend du jour choisi
  champHeure.value = "";

  afficherCreneaux(date);
}

// ----- Rendu des créneaux -----

function afficherCreneaux(date) {
  creneauxConteneur.innerHTML = "";
  const fenetres = HORAIRES[date.getDay()] || [];

  if (fenetres.length === 0) {
    creneauxInvite.textContent = "Aucun service ce jour-là.";
    creneauxInvite.style.display = "";
    return;
  }

  creneauxInvite.style.display = "none";

  // Un groupe par service (déjeuner / dîner)
  fenetres.forEach((fenetre) => {
    const debutMin = versMinutes(fenetre[0]);
    const service = debutMin < 17 * 60 ? "Déjeuner" : "Dîner";

    const groupe = document.createElement("div");
    groupe.className = "creneau-groupe";

    const titre = document.createElement("p");
    titre.className = "creneau-service";
    titre.textContent = service;
    groupe.appendChild(titre);

    const ligne = document.createElement("div");
    ligne.className = "creneau-liste";

    creneauxDeFenetre(fenetre).forEach((heure) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "creneau-btn";
      btn.textContent = heure.replace(":", "h");
      btn.addEventListener("click", () => choisirCreneau(heure, btn));
      ligne.appendChild(btn);
    });

    groupe.appendChild(ligne);
    creneauxConteneur.appendChild(groupe);
  });
}

// ----- Sélection d'un créneau -----

function choisirCreneau(heure, btn) {
  creneauxConteneur.querySelectorAll(".creneau-btn.selected")
    .forEach((el) => el.classList.remove("selected"));
  btn.classList.add("selected");
  champHeure.value = heure.replace(":", "h");
}

// ----- Validation à l'envoi -----

function validerAvantEnvoi(e) {
  // La validation native gère prénom, nom, téléphone, personnes.
  // On complète ici pour la date et l'heure (champs readonly non validables
  // nativement).
  if (!champDate.value || !champHeure.value) {
    e.preventDefault();
    creneauxInvite.textContent = !champDate.value
      ? "Merci de choisir une date dans le calendrier."
      : "Merci de choisir un créneau horaire.";
    creneauxInvite.style.display = "";
    creneauxInvite.classList.add("creneaux-erreur");
    document.getElementById("calendrier").scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}

// ----- Navigation entre les mois -----

btnPrev.addEventListener("click", () => {
  moisAffiche = new Date(moisAffiche.getFullYear(), moisAffiche.getMonth() - 1, 1);
  afficherCalendrier();
});

btnNext.addEventListener("click", () => {
  moisAffiche = new Date(moisAffiche.getFullYear(), moisAffiche.getMonth() + 1, 1);
  afficherCalendrier();
});

formulaire.addEventListener("submit", validerAvantEnvoi);

// Rendu initial
afficherCalendrier();
