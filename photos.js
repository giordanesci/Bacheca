/*
  ==========================================================
  QUI aggiungi le tue foto. Ogni foto è un oggetto con:

  src:      percorso del file (mettilo dentro la cartella /photos)
  alt:      breve descrizione (per accessibilità)
  category: "alpinismo" | "immersioni" | "viaggi"
  location: dove è stata scattata
  stat:     quota o profondità, es. "3841 m" oppure "-18 m"
  date:     mese e anno, es. "Lug 2026"

  Per sostituire i placeholder:
  1. Copia le tue foto dentro la cartella /photos
  2. Cambia "src" con "photos/nome-del-file.jpg"
  3. Aggiorna gli altri campi

  Le immagini più "alte" (portrait) creano più varietà nel
  layout a mosaico — non serve ridimensionarle a mano.
  ==========================================================
*/

const PHOTOS = [
  {
    src: "photos/DSC_3747.JPG",
    alt: "Nepal 111",
    category: "alpinismo",
    location: "nepal",
    stat: "3841 m",
    date: "Sep 2022"
  },
  {
    src: "photos/img_0001.jpg",
    alt: "Tengboche",
    category: "viaggi",
    location: "Nepal",
    stat: "3867 m",
    date: "Sep 2022"
  }
];
