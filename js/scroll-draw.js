window.addEventListener('scroll', function() {
  const mainImageContainer = document.getElementById('home');
  const scrollPosition = window.scrollY;
  const image = mainImageContainer.querySelector('#home img');

  // Update image position based on scroll position
  image.style.transform = `translateY(${scrollPosition}px)`;
});