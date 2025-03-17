document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".custom-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const donationSelect = document.getElementById("Donation");
    const mealsInput = document.getElementById("meals");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // منع إعادة تحميل الصفحة

        // جلب البيانات القديمة من localStorage (إذا وجدت)
        let savedData = localStorage.getItem("Iftar");
        let donations = savedData ? JSON.parse(savedData) : []; // ✅ إصلاح الخطأ هنا

        // إنشاء إدخال جديد
        const newEntry = {
            name: nameInput.value,
            email: emailInput.value,
            dotation: donationSelect.value,
            meals: mealsInput.value
        };

        donations.push(newEntry); // إضافة الإدخال الجديد إلى المصفوفة

        // حفظ المصفوفة المحدثة في localStorage
        localStorage.setItem("Iftar", JSON.stringify(donations));

        alert("Your donation has been saved!");

        // مسح الحقول بعد الإرسال
        form.reset();
    });
});

emailjs.init("YOUR_USER_ID");

document.querySelector(".custom-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const dotation = document.getElementById("Dotation").value;
    const meals = document.getElementById("meals").value;

    // Send email via EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: name,
        to_email: email,
        dotation: dotation,
        meals: meals
    }).then(function(response) {
        alert("Your donation details have been sent!");
    }, function(error) {
        alert("Failed to send email. Please try again.");
    });
});