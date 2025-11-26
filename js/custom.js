// custom.js

// নিশ্চিত হও ডম লোড হওয়ার পর স্ক্রিপ্ট চলবে
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // ইমেইল ভ্যালিডেশন করার জন্য সিম্পল Regex
    function isValidEmail(email) {
        // খুব জটিল না, শুধু সাধারণ ফরম্যাট চেক
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // পেজ রিলোড বন্ধ

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Basic validation
        if (!email) {
            alert("Please enter your email address.");
            emailInput.focus();
            return;
        }

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            emailInput.focus();
            return;
        }

        if (!password) {
            alert("Please enter your password.");
            passwordInput.focus();
            return;
        }

        // চাইলে এখানে button এ loading UI দিতে পারো
        const submitBtn = form.querySelector(".submit-btn");
        const btnText = submitBtn.querySelector(".btn-text");
        const btnLoader = submitBtn.querySelector(".btn-loader");

        // যদি btn-loader span না রাখো, তাহলে নিচের ৩ লাইন বাদ দাও
        if (btnLoader) {
            btnLoader.style.display = "inline-block";
        }
        if (btnText) {
            btnText.textContent = "Signing in...";
        }
        submitBtn.disabled = true;

        // এখানে normally তুমি API call করবে (fetch / axios ইত্যাদি)
        // এখন demo হিসেবে একটু delay দিয়ে ফেক success দেখাচ্ছি
        setTimeout(function () {
            // success ধরলাম
            alert("Logged in successfully! (demo)");

            // আবার বাটন রিসেট করে দিচ্ছি
            if (btnLoader) {
                btnLoader.style.display = "none";
            }
            if (btnText) {
                btnText.textContent = "Sign In";
            }
            submitBtn.disabled = false;

            // ফর্ম ক্লিয়ার করতে চাইলে
            // form.reset();

            // চাইলে অন্য পেজে রিডাইরেক্ট করতে পারো
            // window.location.href = "dashboard.html";
        }, 1200);
    });
});
