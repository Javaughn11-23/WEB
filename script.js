document.getElementById('logo').addEventListener('click', () => {
  document.body.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = "home.html"; // change this to your shop page later
  }, 800);
});
