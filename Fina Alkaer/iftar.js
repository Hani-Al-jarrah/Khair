document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".custom-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const donationSelect = document.getElementById("Donation");
    const mealsInput = document.getElementById("meals");

    // تهيئة EmailJS
    emailjs.init("cbS51J5nST9fjg9tr"); // استبدل بـ User ID الخاص بك من EmailJS

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // منع إعادة تحميل الصفحة

        // إنشاء إدخال جديد
        const newEntry = {
            name: nameInput.value,
            email: emailInput.value,
            donation: donationSelect.value,
            meals: mealsInput.value
        };

        // حفظ البيانات في localStorage
        let savedData = localStorage.getItem("Iftar");
        let donations = savedData ? JSON.parse(savedData) : [];
        donations.push(newEntry);
        localStorage.setItem("Iftar", JSON.stringify(donations));

        // إرسال البريد الإلكتروني عبر EmailJS
        return emailjs.send("service_zig0vns", "template_ul5d7xo", {
            name: nameInput.value,  // ✅ تصحيح المتغيرات
            to_email: emailInput.value,  // ✅ تصحيح المتغيرات
            email: emailInput.value,  // ✅ تصحيح المتغيرات
            title: "Donation Confirmation",
            donation: donationSelect.value,  // ✅ تصحيح المتغيرات
            meals: mealsInput.value  // ✅ تصحيح المتغيرات
        }).then(function(response) {
            // عرض إشعار نجاح الإرسال
            Swal.fire({
                title: "Thank You! 🎉",
                text: "Your donation has been successfully saved and email sent!",
                icon: "success",
                confirmButtonText: "OK",
                confirmButtonColor: "#3085d6"
            });

            // مسح الحقول بعد الإرسال
            form.reset();
        }).catch(function(error) {
            // إشعار بفشل الإرسال
            Swal.fire({
                title: "Thank You! 🎉",
                text: "Your donation has been successfully saved.",
                icon: "success",
                confirmButtonText: "OK",
                confirmButtonColor: "#3085d6"
            });
        });
    });
});