window.addEventListener('resize', () => {
  const header = document.querySelector('.header');
  const height = header.offsetHeight;
  const hero = document.querySelector('.hero');

  hero.style.height = `calc(100vh - ${height}px)`;
});
