window.onload= () => {
    let isLoggedIn= localStorage.getItem('email') ;
if (isLoggedIn) {
        document.getElementById('Profile').style.display = 'block';
        document.getElementById('Login').style.display = 'none';
    } else {
        document.getElementById('Profile').style.display = 'none';
        document.getElementById('Login').style.display = 'block';}
    }