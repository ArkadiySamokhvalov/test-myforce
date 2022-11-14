const numbers = Array.from(document.querySelectorAll('.js-phone'));

numbers.forEach((number) => {
  const str = number.getAttribute('href');
  const cleaned = ('' + str).replace(/\D/g, '').slice(1);
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{2})(\d{2})$/);

  if (match) {
    number.textContent = `+7 ${match[1]} ${match[2]} ${match[3]} ${match[4]}`;
  }
});
