(function(){
  const stream = document.getElementById('stream');
  const navlinks = document.querySelectorAll('.navlink[data-filter]');
  const burger = document.getElementById('burger');
  const nav = document.querySelector('.topbar__nav');

  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbCaption = document.getElementById('lbCaption');
  const lbClose = document.getElementById('lbClose');
  const lbPrev = document.getElementById('lbPrev');
  const lbNext = document.getElementById('lbNext');

  let activeFilter = 'all';
  let currentIndex = 0;
  let observer = null;

  function visiblePhotos(){
    return PHOTOS
      .map((p, i) => ({ ...p, _index: i }))
      .filter(p => activeFilter === 'all' || p.category === activeFilter);
  }

  function render(){
    if (observer) observer.disconnect();
    stream.innerHTML = '';

    const items = visiblePhotos();

    if (!items.length){
      const empty = document.createElement('p');
      empty.className = 'stream__empty';
      empty.textContent = 'Ancora nessuna foto in questa categoria.';
      stream.appendChild(empty);
      return;
    }

    items.forEach(photo => {
      const frame = document.createElement('figure');
      frame.className = 'frame';
      frame.dataset.index = photo._index;

      frame.innerHTML = `
        <div class="frame__figure">
          <img src="${photo.src}" alt="${photo.alt}" loading="lazy">
          <figcaption class="frame__caption">
            <span>${photo.location}</span>
            <span>${photo.stat ? photo.stat + ' — ' : ''}${photo.date}</span>
          </figcaption>
        </div>
      `;

      frame.querySelector('img').addEventListener('click', () => openLightbox(photo._index));
      stream.appendChild(frame);
    });

    setupObserver();
  }

  function setupObserver(){
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.frame__figure').forEach(el => observer.observe(el));
  }

  navlinks.forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;
      navlinks.forEach(f => f.classList.toggle('is-active', f === btn));
      render();
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
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
    lbCaption.textContent = `${photo.location}${photo.stat ? ' — ' + photo.stat : ''} — ${photo.date}`;
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
