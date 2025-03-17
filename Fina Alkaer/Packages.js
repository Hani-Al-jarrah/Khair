document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".custom-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const packageSelect = document.getElementById("package");
    const numberofPackagesInput = document.getElementById("numberofPackages");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        let savedData = localStorage.getItem("Packages");
        let donations = savedData ? JSON.parse(savedData) : []; 

        const newEntry = {
            name: nameInput.value,
            email: emailInput.value,
            package: packageSelect.value,
            numberofPackages: numberofPackagesInput.value
        };

        donations.push(newEntry); 

        localStorage.setItem("Packages", JSON.stringify(donations));

        Swal.fire({
            title: "Thank You! 🎉",
            text: "Your donation has been successfully saved.",
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#3085d6"
        });

        form.reset();
    });
});
window.onload= () => {
    let isLoggedIn= localStorage.getItem('email') ;
if (isLoggedIn) {
        document.getElementById('Profile').style.display = 'block';
        document.getElementById('Login').style.display = 'none';
    } else {
        document.getElementById('Profile').style.display = 'none';
        document.getElementById('Login').style.display = 'block';}
    }