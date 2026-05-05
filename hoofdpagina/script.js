//  Houdt bij welke afbeelding momenteel open is
let currentIndex = 0;

//  Lijst van alle afbeeldingen in je gallery
let images = [];


// Wordt uitgevoerd wanneer je op een afbeelding klikt
function openImage(img) {

  // Pak alle afbeeldingen uit je galleries
  images = Array.from(document.querySelectorAll(".gallery img, .gallery-grid-large img"));

  // Zoek de index van de afbeelding waarop je klikte
  currentIndex = images.indexOf(img);

  //  Pak de lightbox en de afbeelding erin
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  //  Zet de juiste afbeelding in de lightbox
  lightboxImg.src = img.src;

  //  Toon de lightbox (via CSS class)
  lightbox.classList.add('open');
}


//  Sluit de lightbox wanneer je erop klikt
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}


// Ga naar de volgende afbeelding
function nextImage(event) {

  //  Zorgt dat de klik op de pijl de lightbox niet sluit
  event.stopPropagation();

  // Ga 1 vooruit in de lijst
  currentIndex = (currentIndex + 1) % images.length;

  //  Toon de nieuwe afbeelding
  document.getElementById('lightbox-img').src = images[currentIndex].src;
}


// Ga naar de vorige afbeelding
function prevImage(event) {

  //  Zorgt dat de klik op de pijl de lightbox niet sluit
  event.stopPropagation();

  //  Ga 1 terug in de lijst (met loop naar einde)
  currentIndex = (currentIndex - 1 + images.length) % images.length;

  // Toon de nieuwe afbeelding
  document.getElementById('lightbox-img').src = images[currentIndex].src;
}



// Hamburger menu openen/sluiten
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}
