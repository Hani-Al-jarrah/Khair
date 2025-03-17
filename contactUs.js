const images = [
    "WhatsApp Image 2025-03-17 at 14.58.19.jpeg"
  ];
  
  let currentIndex = 0;
  const background = document.querySelector(".background");
  
  function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    background.style.backgroundImage = `url(${images[currentIndex]})`;
  }
  
  background.style.backgroundImage = `url(${images[0]})`;
  
  setInterval(changeBackground, 2500);
  window.onload= () => {
    let isLoggedIn= localStorage.getItem('email') ;
if (isLoggedIn) {
        document.getElementById('Profile').style.display = 'block';
        document.getElementById('Login').style.display = 'none';
    } else {
        document.getElementById('Profile').style.display = 'none';
        document.getElementById('Login').style.display = 'block';}
    }