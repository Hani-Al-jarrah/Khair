document.addEventListener("DOMContentLoaded", function () {
    const userName = localStorage.getItem("name") || "No Name";
    const userEmail = localStorage.getItem("email") || "No Email";
    document.getElementById("userName").textContent = userName;
    document.getElementById("userEmail").textContent = userEmail;
  
    const editProfileBtn = document.getElementById("editProfileBtn");
    const logoutBtn = document.getElementById("logoutBtn");
    const modal = document.getElementById("editProfileModal");
    const closeModal = document.querySelector(".close");
    const saveChangesBtn = document.getElementById("saveChangesBtn");
  
    editProfileBtn.addEventListener("click", function () {
      modal.style.display = "block";
    });
  
    closeModal.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    saveChangesBtn.addEventListener("click", function () {
      const newName = document.getElementById("editName").value.trim();
      const newPassword = document.getElementById("editPassword").value.trim();
  
      if (newName !== "") {
        localStorage.setItem("name", newName);
        document.getElementById("userName").textContent = newName;
      }
  
      if (newPassword !== "") {
        localStorage.setItem("password", newPassword);
      }
  
      modal.style.display = "none";
      alert("Profile updated successfully!");
    });
  
    logoutBtn.addEventListener("click", function () {
      alert("Logged out successfully!");
      window.location.href = "index.html"; 
    });
  
    // Display Donation History
    function loadDonations() {
      let donations = localStorage.getItem("Packages");
      donations = donations ? JSON.parse(donations) : [];
  
      const donationList = document.getElementById("donationList");
      donationList.innerHTML = "";
  
      donations.forEach(donation => {
        if (donation.email === userEmail) { // Filter donations by logged-in user
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${donation.package}</td>
            <td>${donation.numberofPackages}</td>
          `;
          donationList.appendChild(row);
        }
      });
    }
  
    loadDonations();
  });