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
    src: "photos/DSC_0805.NEF",
    alt: "Nepal 111",
    category: "alpinismo",
    location: "nepal",
    stat: "3841 m",
    date: "Sep 2022"
  },
  {
    src: "https://picsum.photos/seed/siargao1/900/700",
    alt: "Barangkas al tramonto",
    category: "viaggi",
    location: "Siargao",
    stat: "",
    date: "Giu 2026"
  },
  {
    src: "https://picsum.photos/seed/apoisland1/800/1000",
    alt: "Barriera corallina",
    category: "immersioni",
    location: "Apo Island",
    stat: "-22 m",
    date: "Giu 2026"
  },
  {
    src: "https://picsum.photos/seed/grivola1/900/650",
    alt: "Ghiacciaio sospeso",
    category: "alpinismo",
    location: "Grivola",
    stat: "3969 m",
    date: "Lug 2026"
  },
  {
    src: "https://picsum.photos/seed/elnido1/800/1050",
    alt: "Falesie calcaree",
    category: "viaggi",
    location: "El Nido",
    stat: "",
    date: "Lug 2026"
  },
  {
    src: "https://picsum.photos/seed/malapascua1/900/720",
    alt: "Squalo volpe all'alba",
    category: "immersioni",
    location: "Malapascua",
    stat: "-28 m",
    date: "Giu 2026"
  },
  {
    src: "https://picsum.photos/seed/granparadiso1/800/1000",
    alt: "Nevaio in quota",
    category: "alpinismo",
    location: "Gran Paradiso",
    stat: "4061 m",
    date: "Set 2025"
  },
  {
    src: "https://picsum.photos/seed/siquijor1/900/680",
    alt: "Acqua turchese",
    category: "viaggi",
    location: "Siquijor",
    stat: "",
    date: "Giu 2026"
  },
  {
    src: "https://picsum.photos/seed/lyskamm1/800/1080",
    alt: "Cresta esposta",
    category: "alpinismo",
    location: "Cresta Est del Lyskamm",
    stat: "4527 m",
    date: "Lug 2025"
  }
];
