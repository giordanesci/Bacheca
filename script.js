(function(){
  const board = document.getElementById('board');
  const heroImg = document.getElementById('heroImg');
  const filters = document.getElementById('filters');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbCaption = document.getElementById('lbCaption');
  const lbClose = document.getElementById('lbClose');
  const lbPrev = document.getElementById('lbPrev');
  const lbNext = document.getElementById('lbNext');

  let currentIndex = 0;
  let activeFilter = 'all';

  // Hero usa la prima foto come sfondo
  if (PHOTOS.length){
    heroImg.src = PHOTOS[0].src;
    heroImg.alt = PHOTOS[0].alt;
  }

  function visiblePhotos(){
    return PHOTOS.filter(p => activeFilter === 'all' || p.category === activeFilter);
  }

  function render(){
    board.innerHTML = '';
    PHOTOS.forEach((photo, i) => {
      const card = document.createElement('article');
      card.className = 'card';
      card.dataset.category = photo.category;
      card.dataset.index = i;
      card.tabIndex = 0;

      if (activeFilter !== 'all' && photo.category !== activeFilter){
        card.classList.add('is-hidden');
      }

      card.innerHTML = `
        <img src="${photo.src}" alt="${photo.alt}" loading="lazy">
        <div class="card__caption">
          <p class="card__location">${photo.location}</p>
          <p class="card__meta">
            ${photo.stat ? `<span>${photo.stat}</span>` : ''}
            <span>${photo.date}</span>
          </p>
        </div>
      `;

      card.addEventListener('click', () => openLightbox(i));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' '){
          e.preventDefault();
          openLightbox(i);
        }
      });

      board.appendChild(card);
    });
  }

  filters.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter');
    if (!btn) return;
    activeFilter = btn.dataset.filter;
    filters.querySelectorAll('.filter').forEach(f => f.classList.toggle('is-active', f === btn));
    render();
  });

  function openLightbox(index){
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox(){
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function updateLightbox(){
    const photo = PHOTOS[currentIndex];
    lbImg.src = photo.src;
    lbImg.alt = photo.alt;
    lbCaption.innerHTML = `<em>${photo.location}</em>${photo.stat ? photo.stat + ' · ' : ''}${photo.date}`;
  }

  function step(dir){
    currentIndex = (currentIndex + dir + PHOTOS.length) % PHOTOS.length;
    updateLightbox();
  }

  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', () => step(-1));
  lbNext.addEventListener('click', () => step(1));
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });

  render();
})();
