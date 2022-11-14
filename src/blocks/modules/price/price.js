const prices = Array.from(document.querySelectorAll('.price__value'));
prices.forEach((price) => {
  // eslint-disable-next-line no-param-reassign
  price.textContent = price.textContent.replace(
    /(\d)(?=(\d\d\d)+([^\d]|$))/g,
    '$1 ',
  );
});
